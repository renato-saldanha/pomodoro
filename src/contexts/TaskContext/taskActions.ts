import { TaskModel } from "@/models/TaskModel";

export enum TaskActionTypes {
    INICIAR_TASK = 'INICIAR_TASK',
    PARAR_TASK = 'PARAR_TASK',
    RESETAR_TASK = 'RESETAR_TASK',
    CONTADOR = 'CONTADOR',
    COMLETAR_TASK = 'COMLETAR_TASK',
    ATUALIZAR_CONTADOR = 'ATUALIZAR_CONTADOR',
}

export type TaskActionModel =
    | {
        type: TaskActionTypes.INICIAR_TASK;
        payload: TaskModel
    }
    | {
        type: TaskActionTypes.PARAR_TASK;
        payload?: TaskModel;
    }
    | {
        type: TaskActionTypes.RESETAR_TASK;
    }
    | {
        type: TaskActionTypes.CONTADOR;
        payload: { segundosRestantes: number; };
    }
    | {
        type: TaskActionTypes.COMLETAR_TASK;
    }
    | {
        type: TaskActionTypes.ATUALIZAR_CONTADOR;
        payload: { segundosRestantes: number; segundosRestantesFormatado: string; };
    };
