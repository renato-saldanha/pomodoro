import { TaskModel } from "@/models/TaskModel";
import { TaskStateModel } from "@/models/TaskStateModel";

export enum TaskActionTypes {
    INICIAR_TASK = 'INICIAR_TASK',
    PARAR_TASK = 'PARAR_TASK',
    RESETAR_TASK = 'RESETAR_TASK',
    CONTADOR = 'CONTADOR',
    COMPLETAR_TASK = 'COMLETAR_TASK',
    ATUALIZAR_CONTADOR = 'ATUALIZAR_CONTADOR',
    RESTAURAR_TASK = 'RESTAURAR_TASK',
}

export type TaskActionModel =
    | {
        type: TaskActionTypes.INICIAR_TASK;
        payload: TaskModel
    }
    | {
        type: TaskActionTypes.PARAR_TASK;
        payload: TaskModel;
    }
    | {
        type: TaskActionTypes.RESETAR_TASK;
    }
    | {
        type: TaskActionTypes.CONTADOR;
        payload: { segundosRestantes: number; };
    }
    | {
        type: TaskActionTypes.COMPLETAR_TASK;
    }
    | {
        type: TaskActionTypes.ATUALIZAR_CONTADOR;
        payload: { segundosRestantes: number; segundosRestantesFormatado: string; };
    }
    |
    {
        type: TaskActionTypes.RESTAURAR_TASK;
        payload: TaskStateModel;
    };
