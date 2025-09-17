import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    nome: string;
    duracao: number;
    dataInicio: number;
    dataFim: number | null;
    dataInterrupcao: number | null;
    tipo: keyof TaskStateModel['config'];
}

export const retornarDataDescansoLongo = (state: TaskStateModel): number => {
    if (state.cicloAtual % 4 === 0 && state.ordemAtual % 2 === 0) return Date.now();
    return 0;
};