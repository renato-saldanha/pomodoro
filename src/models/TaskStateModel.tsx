import { CicloModel } from "./CicloModel";
import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    segundosRestantes: number;
    segundosRestantesFormatado: string;
    taskAtiva: TaskModel | null;
    cicloAtual: number;
    ordemAtual: number;
    ciclos: CicloModel[];
    executando: boolean;
    reiniciado: boolean;
    config: {
        tempoFoco: number;
        tempoDescansoCurto: number;
        tempoDescansoLongo: number;
    }
}