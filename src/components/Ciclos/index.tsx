import { useTaskContext } from '@/contexts/TaskContext/hooks';
import { getTipoCiclo } from '@/models/CicloModel';
import React, { InputHTMLAttributes } from 'react';

type CiclosProps = { 
    texto?: 'oi';
};

const Ciclos  : React.FC<CiclosProps & InputHTMLAttributes<HTMLInputElement>> = ({}) => {
    const { state } = useTaskContext();
    const ciclos = state.ciclos;

    const DescricaoCiclo : React.FC = () => {
        const tempoTrabalho = state.config.tempoTrabalho;
        const tempoDescanso = state.config.tempoDescansoCurto;
        const tempoDescansoLongo = state.config.tempoDescansoLongo;

        let textoTipo;
        let tempoTipo;

        const tipoTask = getTipoCiclo(state);
        switch (tipoTask) {
            case 'tempoTrabalho':
                textoTipo = 'Estude';
                tempoTipo = tempoTrabalho;                
                break;
            case 'tempoDescansoCurto':
                textoTipo = 'Descanse';
                tempoTipo = tempoDescanso;
                break;
            default:
                textoTipo = 'Descanse';
                tempoTipo = tempoDescansoLongo;
                break;
        }

        return state.executando ? <p>Nesse ciclo {textoTipo} por {tempoTipo} minutos</p> : <p className='text-transparent'> & </p>
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
                                <div className="text-aviso text-xl">●</div>
                            )}
                            {ciclo.descanso && (
                                <div className={`text-xl ${ciclo.numeroCiclo == 4 ? 'text-play' : 'text-primario'}`}>●</div>
                            ) }
                            
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


