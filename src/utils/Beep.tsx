const beep = '/assets/beep.mp3';

export const carregarBeep = () => {
    const audio = new Audio(beep);
    audio.load();

    return () => {
        audio.currentTime = 0;
        audio.play();
    }
};
