import { createContext, useContext, useState } from "react";

import { TaskStateModel } from "@/models/TaskStateModel";

export const estadoInicial: TaskStateModel = {
    tasks: [],
    segundosRestantes: 0,
    segundosRestantesFormatado: '00:00',
    taskAtivo: null,
    cicloAtual: 1,
    ordemAtual: 1,
    executando: false,
    ciclos: [
        { numeroCiclo: 1, trabalho: false, descanso: false, },
        { numeroCiclo: 2, trabalho: false, descanso: false, },
        { numeroCiclo: 3, trabalho: false, descanso: false, },
        { numeroCiclo: 4, trabalho: false, descanso: false, },
    ],
    config: {
        tempoTrabalho: 25,
        tempoDescansoCurto: 5,
        tempoDescansoLongo: 15,
    }
}

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const estadoInicialContext = {
    state: estadoInicial,
    setState: () => {},   
}

export const TaskContext = createContext<TaskContextProps>(estadoInicialContext);


