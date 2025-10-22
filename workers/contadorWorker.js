import { WORKER_COMANDO_INICIAR, WORKER_COMANDO_PARAR, WORKER_STATUS_COMPLETO, WORKER_STATUS_EXECUTANDO } from "@/utils/Const";

let intervalId = null;
let isRunning = false;

self.onmessage = (e) => {
    const message = e.data;

    switch (message.comando) {
        case WORKER_COMANDO_INICIAR:
            iniciarContador(message);            
            break;
        case WORKER_COMANDO_PARAR:
            pararContador();
            break;
        default:
            // Comando desconhecido
            break;
    }
}

function pararContador() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    isRunning = false;
    self.postMessage({ status: 'parado' });
}

function iniciarContador(message) {
    if (intervalId) {
        clearInterval(intervalId);
    }

    isRunning = true;
    const state = message.state;
    const { segundosRestantes } = state;

    self.postMessage({
        segundosRestantes: segundosRestantes,
        status: WORKER_STATUS_EXECUTANDO
    });

    const dataFim = Date.now() + (segundosRestantes * 1000);

    function tick() {
        const now = Date.now();
        const contadorSegundosRestantes = Math.ceil((dataFim - now) / 1000);

        if (contadorSegundosRestantes <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            isRunning = false;
            self.postMessage({
                segundosRestantes: 0,
                status: WORKER_STATUS_COMPLETO
            });
        } else {
            self.postMessage({
                segundosRestantes: contadorSegundosRestantes,
                status: WORKER_STATUS_EXECUTANDO
            });
        }
    }
    
    intervalId = setInterval(tick, 1000);
}