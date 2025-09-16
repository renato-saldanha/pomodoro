export type TaskModel = {
    id: string;
    nome: string;
    duracao: number;
    dataInicio: number;
    dataFim: number | null;
    dataInterrupcao: number | null;
    tipo: 'trabalho' | 'descansoCurto' | 'descansoLongo';
}
