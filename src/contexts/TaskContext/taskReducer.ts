import { TaskStateModel } from "@/models/TaskStateModel";
import { TaskActionModel, TaskActionTypes } from "./taskActions";
import { formatarSegundosParaTempo } from "@/utils/formatarSegundoParaMinuto";
import { retornarDataDescansoLongo, TaskModel } from "@/models/TaskModel";
import { getProximaDuracaoCiclo, getProximaOrdemCiclo, getTipoCiclo, setProximoCicloSeDescanso } from "@/models/CicloModel";

const handleCicloTrabalho = (state: TaskStateModel, task: TaskModel, segundosRestantes: number): TaskStateModel => {
    return {
        ...state,
        ciclos: state.ciclos.map(c =>
            c.numeroCiclo === state.cicloAtual
                ? { ...c, trabalho: true }
                : c
        ),
        executando: true,
        taskAtiva: task,
        segundosRestantes,
        segundosRestantesFormatado: formatarSegundosParaTempo(segundosRestantes),
        tasks: [...state.tasks, task],
        config: { ...state.config }
    };
};


const handleCicloDescanso = (state: TaskStateModel, task: TaskModel, segundosRestantes: number): TaskStateModel => {
    return {
        ...state,            
        ciclos: state.ciclos.map(c =>
            c.numeroCiclo === state.cicloAtual
                ? { ...c, descanso: true }
                : c
        ),
        executando: true,
        taskAtiva: task,
        segundosRestantes,
        segundosRestantesFormatado: formatarSegundosParaTempo(segundosRestantes),
        tasks: [...state.tasks, task],
        config: { ...state.config }
    };
};

const handleResetarCiclo = (state: TaskStateModel) => {
    return {
        ...state,
        executando: false,
        ciclos: state.ciclos.map(c => (
            c.numeroCiclo === 1
                ? { ...c, trabalho: true, descanso: false }
                : { ...c, trabalho: false, descanso: false }
        )),
        ordemAtual: 2,
        cicloAtual: 1,
    };
};

export const taskReducer = (state: TaskStateModel, action: TaskActionModel): TaskStateModel => {
    switch (action.type) {
        case TaskActionTypes.INICIAR_TASK: {
            const task = action.payload;

            const segundosRestantes = task.duracao * 60;

            let novoEstado: TaskStateModel;
            const tipoTask = getTipoCiclo(state);

            switch (tipoTask) {
                case 'tempoTrabalho':
                    novoEstado = handleCicloTrabalho(state, task, segundosRestantes);
                    break;
                case 'tempoDescansoCurto':
                    novoEstado = handleCicloDescanso(state, task, segundosRestantes);
                    break
                case 'tempoDescansoLongo':
                    novoEstado = handleCicloDescanso(state, task, segundosRestantes);
                    break;
                default:
                    novoEstado = handleResetarCiclo(state);
            }

            return novoEstado;
        }
        case TaskActionTypes.PARAR_TASK: {
            const cicloAtual = setProximoCicloSeDescanso(state);
            const ordemAtual = getProximaOrdemCiclo(state);
            const duracaoTaks = getProximaDuracaoCiclo(state);
            const dataFim = retornarDataDescansoLongo(state);

            return {
                ...state,
                taskAtiva: null,
                executando: false,
                cicloAtual: cicloAtual,
                ordemAtual: ordemAtual,
                segundosRestantes: 0,
                segundosRestantesFormatado: '00:00',
                tasks: state.tasks.map(task => (
                    state.taskAtiva && task.id === state.taskAtiva.id
                        ? {
                            ...task,
                            duracao: duracaoTaks,
                            dataInterrupcao: Date.now(),
                            dataFim: dataFim,
                        } : task
                ))
            };
        }
        case TaskActionTypes.RESETAR_TASK:
            return handleResetarCiclo(state);

    }
};