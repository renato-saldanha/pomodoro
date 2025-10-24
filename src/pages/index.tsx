import React, { useRef } from "react";

import { Play, StopCircle } from "lucide-react";

import Contador from "@/components/Contador";
import TaskInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Ciclos from "@/components/Ciclos";
import { useTaskContext } from "@/contexts/TaskContext/hooks";
import { erro } from "@/components/Notificacao";
import { TaskModel } from "@/models/TaskModel";
import { getDuracaoCiclo, getTipoCiclo } from "@/models/CicloModel";
import { TaskActionTypes } from "@/contexts/TaskContext/taskActions";

type HomeProps = {
    texto: 'oi';
};

const Home: React.FC<HomeProps> = () => {
    const { state, dispatch } = useTaskContext();
    const nomeTaskRef = useRef<HTMLInputElement>(null);
    const ultimaTask = state.tasks && state.tasks.length ? state.tasks[state.tasks.length - 1].nome : '';

    const executandoPlayer = () => {
        if (state.executando) {
            return true
        }
        return false;
    };

    const handlePlayStopClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!executandoPlayer()) {
            if (!nomeTaskRef) return;

            const nomeTask = nomeTaskRef.current?.value.trim();

            if (!nomeTask) {
                erro('Insira um nome para a Task')
                return;
            }

            const dataInicio = Date.now();

            const novaTask: TaskModel = {
                id: Date.now().toString(),
                nome: nomeTask,
                duracao: getDuracaoCiclo(state),
                dataInicio: dataInicio,
                dataFim: null,
                dataInterrupcao: null,
                tipo: getTipoCiclo(state),
            };

            dispatch({ type: TaskActionTypes.INICIAR_TASK, payload: novaTask });
        } else {
            dispatch({ type: TaskActionTypes.PARAR_TASK, payload: state.taskAtiva as TaskModel });
        }
    }

    return (
        <div className=" flex-1  
                         xl:space-y-10" >
            <Contador
                valor={state.segundosRestantesFormatado} />
            <TaskInput
                id='task'
                type="text"
                titulo="task"
                placeholder="Nome da tarefa"
                ref={nomeTaskRef}
                disabled={state.taskAtiva ? true : false}
                defaultValue={ultimaTask}
            />
            <Ciclos />
            <div>
                <CustomButton
                    id='PlayStop'
                    className={`text-texto-padrao rounded-md border-0  p-2 px-17 ${!executandoPlayer() ? 'bg-play hover:bg-play-hover' : 'bg-erro hover:bg-erro-hover'} 
                                lg:p-3 lg:px-31 `}
                    icone={!executandoPlayer() ? <Play size={35} /> : <StopCircle size={35} />}
                    onClick={handlePlayStopClick} />
            </div>
        </div>
    )
}

export default Home;
