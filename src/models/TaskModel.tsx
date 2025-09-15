export type TaskModel = {
    id: string;
    nome: string;
    duracao: number;
    dataInicio: number;
    dataFim: number;
    dataInterrupcao: number;
    tipo: 'trabalho' | 'descansoCurto' | 'descansoLongo';
}