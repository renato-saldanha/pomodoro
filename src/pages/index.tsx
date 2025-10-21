import React, { useEffect, useRef } from "react";
import { ToastContainer } from 'react-toastify';


import { Play, StopCircle } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Ciclos from "@/components/Ciclos";
import { useTaskContext } from "@/contexts/TaskContext/hooks";
import { erro } from "@/components/Notificacao";
import { TaskModel } from "@/models/TaskModel";
import { getDuracaoCiclo, getProximaDuracaoCiclo, getTipoCiclo } from "@/models/CicloModel";
import { TaskActionTypes } from "@/contexts/TaskContext/taskActions";
import { formatarSegundosParaTempo } from "@/utils/formatarSegundoParaMinuto";

type HomeProps = {
    texto: 'oi';
};

const Home: React.FC<HomeProps> = () => {
    const { state, dispatch } = useTaskContext();
    const nomeTaskRef = useRef<HTMLInputElement>(null);
    // const buttonPlayStopRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        console.log('Estado: ', state);
        console.log('Task Ativa: ', state.taskAtiva);
    }, [state.taskAtiva]);

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
            dispatch({ type: TaskActionTypes.PARAR_TASK });
        }
    }

    return (
        <div className=" flex-1  
                         xl:space-y-10" >
            <Contador
                valor={state.segundosRestantesFormatado} />
            <Task
                id='task'
                type="text"
                titulo="task"
                placeholder="Estudar"
                ref={nomeTaskRef}
                disabled={state.taskAtiva ? true : false}
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
            <ToastContainer className="bg-gray-800 text-white rounded-md shadow-md" />
        </div>
    )
}

export default Home;
