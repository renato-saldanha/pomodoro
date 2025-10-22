import { WORKER_COMANDO_INICIAR, WORKER_COMANDO_PARAR} from "@/utils/Const";

let instance: TimerWorkerManager | null = null;

export type WorkerMessage = 
    | { comando: typeof WORKER_COMANDO_INICIAR; state: unknown }
    | { comando: typeof WORKER_COMANDO_PARAR };

export class TimerWorkerManager {
    private worker: Worker | null = null;

    private constructor() {
        if (typeof window !== 'undefined' && typeof Worker !== 'undefined') {
            this.worker = new Worker(new URL('./contadorWorker.js', import.meta.url));
        }
    }

    static getInstance(): TimerWorkerManager {
        if (!instance) {
            instance = new TimerWorkerManager();
        }   
        return instance;
    }
    
    postMessage(message: WorkerMessage) {
        this.worker?.postMessage(message);
    }

    onMessage(handler: (event: MessageEvent) => void) {
        if (this.worker) {
            this.worker.onmessage = handler;
        }
    }

    terminate() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        instance = null;
    }
}

