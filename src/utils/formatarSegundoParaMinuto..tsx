export const formatarSegundosParaTempo = (segundos: number) => {
    const minutos = String(Math.floor(segundos / 60)).padStart(2, '0');
    const restoSegundos = String(Math.floor(segundos % 60)).padStart(2, '0')
    return `${minutos}:${restoSegundos}`;
}