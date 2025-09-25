import React, { useRef } from "react";
import { ToastContainer } from 'react-toastify';


import { Play, StopCircle } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Ciclos from "@/components/Ciclos";
import { useTaskContext } from "@/contexts/TaskContext/hooks";
import { erro } from "@/components/Notificacao";
import { retornarDataDescansoLongo, TaskModel } from "@/models/TaskModel";
import { getProximoTipoCiclo } from "@/models/CicloModel";
import { formatarSegundosParaTempo } from "@/utils/formatarSegundoParaMinuto.";

type HomeProps = {
    texto: 'oi';
};

const Home: React.FC<HomeProps> = () => {
    const {state, setState} = useTaskContext();
    const nomeTaskRef = useRef<HTMLInputElement>(null);
    // const buttonPlayStopRef = useRef<HTMLButtonElement>(null);

    const pararExecucao = () => {
        setState(prev =>({
            ...prev, 
            executando : false,
            segundosRestantes: 0,
            segundosRestantesFormatado: '00:00',
            tasks: prev.tasks.map(t => (
                prev.taskAtivo && t.id === prev.taskAtivo.id  
                    ? {...t, 
                        dataInterrupcao : Date.now(),
                        dataFim: retornarDataDescansoLongo(state),
                    } : t
            ))  
        }))
    };
    
    const executandoPlayer = () => {
        if (state.executando) {
            return true
        }
        return false;    
    };

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

    const handlePlayStopClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!executandoPlayer) {
            if (!nomeTaskRef) return;

            const nomeTask = nomeTaskRef.current?.value.trim();

            if (!nomeTask) {
                erro('Insira um nome para a Task')
                return;
            }

            const novaTask : TaskModel = {
                id: Date.now().toString(),
                nome: nomeTask,
                duracao: state.config[getProximoTipoCiclo(state)],
                dataInicio: Date.now(),
                dataFim: null,
                dataInterrupcao: null,
                tipo: getProximoTipoCiclo(state),
            };

            const segundosRestantes = novaTask.duracao * 60;

            setState(prev => {
                return {
                    ...prev,
                    taskAtivo: novaTask,
                    segundosRestantes,
                    segundosRestantesFormatado: formatarSegundosParaTempo(segundosRestantes),
                    tasks:[...prev.tasks, novaTask],
                    config: {...prev.config}
                }            
            });
            iniciarExecucao();
        } else {
            pararExecucao();
        }
    }

    const resetarCiclo = () => {
        setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c => (
                c.numeroCiclo === 1
                    ? { ...c, trabalho: true, descanso: false }
                    : { ...c, trabalho: false, descanso: false }
            )),
            ordemAtual: 2,
            cicloAtual: 1,
            
        }));
    };

    const gerirCiclos = () => {
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
            }
        }
    }

    const iniciarExecucao = () => {
        executarPlayer();       
        gerirCiclos();
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
                disabled={state.taskAtivo? true : false}
            />            
            <Ciclos ciclos={state.ciclos} />
            <div>
                <CustomButton
                    id='PlayStop'
                    className={`text-texto-padrao rounded-md border-0  p-2 px-17 ${!executandoPlayer ? 'bg-play hover:bg-play-hover' : 'bg-erro hover:bg-erro-hover'} 
                                lg:p-3 lg:px-31 `}
                    icone={!executandoPlayer ? <Play size={35} /> : <StopCircle size={35} />}
                    onClick={handlePlayStopClick}/>
            </div>
            <ToastContainer className="bg-gray-800 text-white rounded-md shadow-md"/>
        </div>
    )
}

export default Home;
