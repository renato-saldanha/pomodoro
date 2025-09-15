import React, { useContext, useEffect, useState } from "react";

import { Play, StopCircle } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Ciclos from "@/components/Ciclos";
import { useTaskContext } from "@/contexts/TaskContext";


type HomeProps = {

};

const Home: React.FC<HomeProps> = () => {
    const taskContext = useTaskContext();

    const pararExecucao = () => {
        taskContext.pararExecucao;
    }

    const handleCicloTrabalho = (numeroCiclo: number) => {
        taskContext.setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c =>
                c.numeroCiclo === numeroCiclo
                    ? { ...c, trabalho: true }
                    : c
            )
        }));
    };

    const handleCicloDescanso = (numeroCiclo: number) => {
        taskContext.setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c =>
                c.numeroCiclo === numeroCiclo
                    ? { ...c, descanso: true }
                    : c
            )
        }));
    };

    const resetarCiclo = () => {
        taskContext.setState(prev => ({
            ...prev,
            ciclos: prev.ciclos!.map(c => ({
                ...c,
                trabalho: false,
                descanso: false
            }))
        }));
    };

    const iniciarExecucao = () => {
        taskContext.executarPlayer;

        if (taskContext.state.ordemAtual === 1) {
            handleCicloTrabalho(taskContext.state.cicloAtual);
            taskContext.setState(prev => ({ ...prev, ordemAtual: 2 }));
        } else if (taskContext.state.cicloAtual == 4 && taskContext.state.ordemAtual == 2) {
            handleCicloDescanso(taskContext.state.cicloAtual);
            taskContext.setState(prev => ({ ...prev, cicloAtual: prev.cicloAtual + 1 }));
        } else {
            handleCicloDescanso(taskContext.state.cicloAtual);
            taskContext.setState(prev => ({ ...prev, ordemAtual: 1 }));
            if (taskContext.state.cicloAtual < 4) {
                taskContext.setState(prev => ({ ...prev, cicloAtual: prev.cicloAtual + 1 }));
            } else if (taskContext.state.cicloAtual >= 4 && taskContext.state.ordemAtual >= 2) {
                resetarCiclo();
                taskContext.setState(prev => ({ ...prev, ordemAtual: 1 }));
                taskContext.setState(prev => ({ ...prev, cicloAtual: 1 }));
                handleCicloTrabalho(1);
                taskContext.setState(prev => ({ ...prev, ordemAtual: 2 }));
            }
        }
    }

    const handlePlayStopClick = () => {
        if (taskContext.state.executando) {
            pararExecucao();
        } else {
            iniciarExecucao();
        }
    }

    useEffect(() => { }, [taskContext.state.ciclos]);

    return (
        <div className="flex-1  
                        xl:space-y-10">
            <Contador
                valor="00:10" />
            <Task
                id='task'
                type="text"
                titulo="task"
                placeholder="Estudar"
            />
            <div >
                <p>Nesse ciclo { } por { }</p>
            </div>
            <Ciclos ciclos={taskContext.state.ciclos} />
            <div>
                <CustomButton
                    id='PlayStop'
                    className={`text-texto-padrao rounded-md border-0  p-2 px-17 ${!taskContext.state.executando ? 'bg-play hover:bg-play-hover' : 'bg-erro hover:bg-erro-hover'} 
                                lg:p-3 lg:px-31 `}
                    icone={!taskContext.state.executando ? <Play size={35} /> : <StopCircle size={35} />}
                    onClick={() => handlePlayStopClick()} />
            </div>
        </div>
    )
}

export default Home;
