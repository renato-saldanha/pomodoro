import { useTaskContext } from '@/contexts/TaskContext/hooks';
import { CicloModel } from '@/models/CicloModel';
import React, { InputHTMLAttributes } from 'react';

type CiclosProps = {    
    ciclos: CicloModel[];
};

const Ciclos  : React.FC<CiclosProps & InputHTMLAttributes<HTMLInputElement>> = ({ciclos}) => {
    const taskContext = useTaskContext();

    const DescricaoCiclo : React.FC = () => {
        const ordemCiclo = taskContext.state.ordemAtual;
        const tempoTrabalho = taskContext.state.config.tempoTrabalho;
        const tempoDescanso = taskContext.state.cicloAtual === 5 && taskContext.state.ordemAtual === 2 ? taskContext.state.config.tempoDescansoLongo : taskContext.state.config.tempoDescansoCurto;

        let textoTipo;
        let tempoTipo;
        switch (ordemCiclo) {
            case 1:
                textoTipo = 'Trabalhe';
                tempoTipo = tempoTrabalho;
                break;        
            default:
                textoTipo = 'Descanse';
                tempoTipo = tempoDescanso;
                break;
        }

        return taskContext.state.executando ? <p>Nesse ciclo {textoTipo} por {tempoTipo} minutos</p> : <p className='text-transparent'> dsa  </p>
    }

    return (
        <div className=" text-primario">
            <div >
                <DescricaoCiclo />
            </div>
            <p>Ciclos:</p>
            <div className='flex items-center justify-center'>
                {ciclos && ciclos.length > 0 && (
                     ciclos.map((ciclo) => (
                        <div key={ciclo.numeroCiclo} className="flex flex-row items-center">                            
                            {ciclo.trabalho && (
                                <div className="text-primario text-xl">●</div>
                            )}
                            {ciclo.descanso && (
                                <div className={`text-xl ${ciclo.numeroCiclo == 4 ? 'text-play' : 'text-aviso'}`}>●</div>
                            )}
                            {!ciclo.descanso && !ciclo.trabalho && (
                                <div className={`text-xl text-transparent`}>●</div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
        
    )
}

export default Ciclos;


