import { TaskModel } from "./TaskModel";
import { TaskStateModel } from "./TaskStateModel";

export type CicloModel = {
    numeroCiclo: number;
    trabalho: boolean;
    descanso: boolean;
};

export const getProximoTipoCiclo = (state: TaskStateModel): TaskModel['tipo'] => {
    if (state.cicloAtual % 4 === 0 && state.ordemAtual % 2 === 0) return 'tempoDescansoLongo';
    if ((state.cicloAtual % 2 === 0 || state.cicloAtual % 3 === 0) && state.ordemAtual % 2 === 1) return 'tempoDescansoCurto';
    return 'tempoTrabalho';
};