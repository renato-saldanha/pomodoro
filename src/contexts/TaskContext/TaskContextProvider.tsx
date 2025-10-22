import { useEffect, useReducer, useRef } from "react";

import { estadoInicial, TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

import { WORKER_COMANDO_INICIAR, WORKER_COMANDO_PARAR, WORKER_STATUS_COMPLETO, WORKER_STATUS_EXECUTANDO } from "@/utils/Const";
import { carregarBeep } from "@/utils/Beep";
import { formatarSegundosParaTempo } from "@/utils/formatarSegundoParaMinuto";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, estadoInicial);
    const workerRef = useRef<TimerWorkerManager | null>(null);
    const tocarBeepRef = useRef<() => void>(() => void 0);

    useEffect(() => {
        workerRef.current = TimerWorkerManager.getInstance();
        tocarBeepRef.current = carregarBeep();

        workerRef.current.onMessage(e => {
            const data = e.data;

            if (data.status === WORKER_STATUS_EXECUTANDO) {
                const segundosRestantes = data.segundosRestantes;

                dispatch({
                    type: TaskActionTypes.ATUALIZAR_CONTADOR,
                    payload: {
                        segundosRestantes,
                        segundosRestantesFormatado: formatarSegundosParaTempo(segundosRestantes)
                    }
                });
            }

            if (data.status === WORKER_STATUS_COMPLETO) {
                tocarBeepRef.current();
                dispatch({ type: TaskActionTypes.PARAR_TASK });
            }
        });

        return () => {
            if (workerRef.current) {
                workerRef.current.postMessage({ comando: WORKER_COMANDO_PARAR });
                workerRef.current.terminate();
            }
        };
    }, []);

    useEffect(() => {
        if (!workerRef.current) return;

        if (state.taskAtiva && state.executando) {
            workerRef.current.postMessage({
                comando: WORKER_COMANDO_INICIAR,
                state: state
            });
        } else if (!state.executando) {
            workerRef.current.postMessage({
                comando: WORKER_COMANDO_PARAR
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.taskAtiva, state.executando]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}