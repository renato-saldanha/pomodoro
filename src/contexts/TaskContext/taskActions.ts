import { TaskModel } from "@/models/TaskModel";

export enum TaskActionTypes {
    INICIAR_TASK = 'INICIAR_TASK',
    PARAR_TASK = 'PARAR_TASK',
    RESETAR_TASK = 'RESETAR_TASK',
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
    };
