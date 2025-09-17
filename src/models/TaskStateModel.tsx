import { CicloModel } from "./CicloModel";
import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    segundosRestantes: number;
    segundosRestantesFormatado: string;
    taskAtivo: TaskModel | null;
    cicloAtual: number;
    ordemAtual: number;
    ciclos: CicloModel[];
    executando: boolean;
    config: {
        tempoTrabalho: number;
        tempoDescansoCurto: number;
        tempoDescansoLongo: number;
    }
}