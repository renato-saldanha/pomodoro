import { createContext } from "react";

import { TaskStateModel } from "@/models/TaskStateModel";
import { TaskActionModel } from "./taskActions";

export const ciclosIniciais =  [
        { numeroCiclo: 1, trabalho: false, descanso: false, },
        { numeroCiclo: 2, trabalho: false, descanso: false, },
        { numeroCiclo: 3, trabalho: false, descanso: false, },
        { numeroCiclo: 4, trabalho: false, descanso: false, },
    ];

export const estadoInicial: TaskStateModel = {
    tasks: [],
    segundosRestantes: 0,
    segundosRestantesFormatado: '00:00',
    taskAtiva: null,
    cicloAtual: 1,
    ordemAtual: 1,
    executando: false,
    ciclos: ciclosIniciais,
    config: {
        tempoTrabalho: 1,
        tempoDescansoCurto: 1,
        tempoDescansoLongo: 1,
    }
}

type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
}

const estadoInicialContext = {
    state: estadoInicial,
    dispatch: () => {},   
}

export const TaskContext = createContext<TaskContextProps>(estadoInicialContext);


