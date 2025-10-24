import { TaskStateModel } from "@/models/TaskStateModel";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export const formatarSegundosParaTempo = (segundos: number) => {
    const minutos = String(Math.floor(segundos / 60)).padStart(2, '0');
    const restoSegundos = String(Math.floor(segundos % 60)).padStart(2, '0')
    return `${minutos}:${restoSegundos}`;
}

export const dataFormatada = (data: Timestamp): string => {
    return new Date(data).toLocaleString('pt-BR');
}

export const tipoTask = (tipo: keyof TaskStateModel['config']): string => {
    switch (tipo) {
        case 'tempoFoco':
            return 'Foco';
        case 'tempoDescansoCurto':
            return 'Descanso Curto';
        case 'tempoDescansoLongo':
            return 'Descanso Longo';
        default:
            return '';
    }
}
