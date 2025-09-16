import React, { HTMLAttributes } from "react";
import { toast, ToastContentProps, ToastOptions } from "react-toastify";

type NotificacaoProps = {
    texto: string;
}

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

