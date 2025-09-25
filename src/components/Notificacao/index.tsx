import { toast } from "react-toastify";


export const notificar = (texto: string) => {
    toast(texto, {
        className: 'bg-blue-500 text-white p-4 rounded-lg shadow-lg',
    });
};

export const erro = (texto: string) => {
    toast(texto, {
        className: 'bg-blue-500 text-white p-4 rounded-lg shadow-lg'
    });
};

