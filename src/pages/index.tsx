import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


import { Play, StopCircle } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Ciclos from "@/components/Ciclos";
import { useTaskContext } from "@/contexts/TaskContext/hooks";
import { erro } from "@/components/Notificacao";
import { TaskModel } from "@/models/TaskModel";
import { ciclosIniciais } from "@/contexts/TaskContext/TaskContext";

type HomeProps = {

};

const Home: React.FC<HomeProps> = () => {
    const {state, setState} = useTaskContext();
    const nomeTaskRef = useRef<HTMLInputElement>(null);

    const pararExecucao = () => {
        setState(prev =>({...prev, executando : false}))
    }

    const executarPlayer = () => {
        setState(prev =>({...prev, executando : true}))
    }

    const handleCicloTrabalho = (numeroCiclo: number) => {
        setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c =>
                c.numeroCiclo === numeroCiclo
                    ? { ...c, trabalho: true }
                    : c
            )
        }));
    };

    const handleCicloDescanso = (numeroCiclo: number) => {
        setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c =>
                c.numeroCiclo === numeroCiclo
                    ? { ...c, descanso: true }
                    : c
            )
        }));
    };

    const resetarCiclo = () => {
        setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c => ({
                ...c,
                trabalho: false,
                descanso: false
            }))
        }));
    };

    const iniciarExecucao = () => {
        executarPlayer();

        if (state.ordemAtual === 1) {
            handleCicloTrabalho(state.cicloAtual);
            setState(prev => ({ ...prev, ordemAtual: 2 }));
        } else if (state.cicloAtual == 4 && state.ordemAtual == 2) {
            handleCicloDescanso(state.cicloAtual);
            setState(prev => ({ ...prev, cicloAtual: prev.cicloAtual + 1 }));
        } else {
            handleCicloDescanso(state.cicloAtual);
            setState(prev => ({ ...prev, ordemAtual: 1 }));
            if (state.cicloAtual < 4) {
                setState(prev => ({ ...prev, cicloAtual: prev.cicloAtual + 1 }));
            } else if (state.cicloAtual >= 4 && state.ordemAtual >= 2) {
                resetarCiclo();
                setState(prev => ({ ...prev, ordemAtual: 1 }));
                setState(prev => ({ ...prev, cicloAtual: 1 }));
                handleCicloTrabalho(1);
                setState(prev => ({ ...prev, ordemAtual: 2 }));
            }
        }
    }

    const handlePlayStopClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!nomeTaskRef) return;

        const nomeTask = nomeTaskRef.current?.value.trim();

        if (!nomeTask) {
            erro('Insira um nome para a Task')
            return;
        }

        const novaTask : TaskModel = {
            id: Date.now().toString(),
            nome: nomeTask,
            duracao: 1,
            dataInicio: Date.now(),
            dataFim: null,
            dataInterrupcao: null,
            tipo: 'trabalho',
        };

        const segundosRestantes = novaTask.duracao * 60;

        setState(prev => {
            return {
                ...prev,
                taskAtivo: novaTask,
                segundosRestantes,
                segundosRestantesFormatado: '00:00',
                tasks:[...prev.tasks, novaTask],
                config: {...prev.config}
            }            
        });

        if (state.executando) {
            pararExecucao();
        } else {
            iniciarExecucao();
        }
    }

    return (
        <div className=" flex-1  
                         xl:space-y-10" >
            <Contador
                valor="00:10" />
            <Task
                id='task'
                type="text"
                titulo="task"
                placeholder="Estudar"
                ref={nomeTaskRef}
            />            
            <Ciclos ciclos={state.ciclos} />
            <div>
                <CustomButton
                    id='PlayStop'
                    className={`text-texto-padrao rounded-md border-0  p-2 px-17 ${!state.executando ? 'bg-play hover:bg-play-hover' : 'bg-erro hover:bg-erro-hover'} 
                                lg:p-3 lg:px-31 `}
                    icone={!state.executando ? <Play size={35} /> : <StopCircle size={35} />}
                    onClick={handlePlayStopClick}/>
            </div>
            <ToastContainer className="bg-gray-800 text-white rounded-md shadow-md"/>
        </div>
    )
}

export default Home;
