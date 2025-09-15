import { Ciclo } from "@/components/Ciclos";
import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    segundosRestantes: number;
    segundosRestantesFormatado: string;
    taskAtivo: TaskModel | null;
    cicloAtual: number;
    ordemAtual: number;
    ciclos: Ciclo[];
    executando: boolean;
    config: {
        tempoTrabalho: number;
        tempoDescansoCurto: number;
        tempoDescansoLongo: number;
    }
}