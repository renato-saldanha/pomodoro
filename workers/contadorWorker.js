let intervalId = null;
let isRunning = false;

self.onmessage = (e) => {
    const message = e.data;

    if (message.command === 'stop') {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isRunning = false;
        self.postMessage({ status: 'stopped' });
        return;
    }

    if (message.command === 'start') {
        if (intervalId) {
            clearInterval(intervalId);
        }

        isRunning = true;
        const state = message.state;
        const { segundosRestantes } = state;

        self.postMessage({ 
            segundosRestantes: segundosRestantes,
            status: 'running' 
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
                    status: 'completed' 
                });
            } else {
                self.postMessage({ 
                    segundosRestantes: contadorSegundosRestantes,
                    status: 'running' 
                });
            }
        }

        intervalId = setInterval(tick, 1000);
    }
}   