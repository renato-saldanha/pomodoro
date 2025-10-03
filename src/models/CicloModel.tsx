import { TaskModel } from "./TaskModel";
import { TaskStateModel } from "./TaskStateModel";

export type CicloModel = {
    numeroCiclo: number;
    trabalho: boolean;
    descanso: boolean;
};

export const getTipoCiclo = (state: TaskStateModel): TaskModel['tipo'] => {
    if (state.ordemAtual % 2 === 1) return 'tempoTrabalho';    
    if (state.cicloAtual % 4 === 0 && state.ordemAtual % 2 === 0) return 'tempoDescansoLongo';    
    return 'tempoDescansoCurto';
};

export const getDuracaoCiclo= (state: TaskStateModel): number => {
    const tipoTask = getTipoCiclo(state);
    switch (tipoTask) {
        case 'tempoTrabalho':
            return state.config.tempoTrabalho;
        case 'tempoDescansoCurto':
            return state.config.tempoDescansoCurto
        default:
            return state.config.tempoDescansoLongo
    }
};

export const getProximaDuracaoCiclo= (state: TaskStateModel): number => {
   if (state.cicloAtual > 0 && state.ordemAtual > 0 && state.cicloAtual % 4 === 0 && state.ordemAtual % 2 === 0) return state.config.tempoTrabalho;
   if ((state.cicloAtual % 2 === 0 || state.cicloAtual % 3 === 0) || state.ordemAtual % 2 === 1) return state.config.tempoDescansoCurto;
   return state.config.tempoDescansoLongo;
};

export const getProximaOrdemCiclo= (state: TaskStateModel): number => {
    return state.ordemAtual % 2 === 0 ? 1 : 2;
};

export const setProximoCicloSeDescanso = (state: TaskStateModel): number => {
    if (getTipoCiclo(state) !== 'tempoTrabalho') {
        return state.cicloAtual + 1;
    }
    return state.cicloAtual
}