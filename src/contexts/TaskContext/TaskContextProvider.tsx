import { useEffect, useReducer, useRef } from "react";
import { estadoInicial, TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { formatarSegundosParaTempo } from "@/utils/formatarSegundoParaMinuto";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, estadoInicial);
    const workerRef = useRef<TimerWorkerManager | null>(null);

    useEffect(() => {
        workerRef.current = TimerWorkerManager.getInstance();

        workerRef.current.onMessage(e => {
            const data = e.data;
            
            if (data.status === 'running') {
                const segundosRestantes = data.segundosRestantes;
                console.log('Worker segundos restantes: ', segundosRestantes);
                
                dispatch({
                    type: TaskActionTypes.ATUALIZAR_CONTADOR,
                    payload: {
                        segundosRestantes,
                        segundosRestantesFormatado: formatarSegundosParaTempo(segundosRestantes)
                    }
                });
            }
            
            if (data.status === 'completed') {
                console.log('Worker Completo');
                dispatch({ type: TaskActionTypes.PARAR_TASK });
            }
        });

        return () => {
            if (workerRef.current) {
                workerRef.current.postMessage({ command: 'stop' });
                workerRef.current.terminate();
            }
        };
    }, []);

    useEffect(() => {
        if (!workerRef.current) return;

        if (state.taskAtiva && state.executando) {
            console.log('Iniciando worker com task:', state.taskAtiva.nome);
            workerRef.current.postMessage({
                command: 'start',
                state: state
            });
        } else if (!state.executando) {
            console.log('Parando worker');
            workerRef.current.postMessage({ command: 'stop' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.taskAtiva, state.executando]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}