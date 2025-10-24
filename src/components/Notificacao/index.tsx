import { toast } from "react-toastify";


export const notificar = (texto: string) => {
    toast(texto, {
        type: "success",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
    });
};

export const erro = (texto: string) => {
    toast(texto, {
        type: "error",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
};

