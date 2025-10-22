import CustomButton from '@/components/CustomButton';
import EditInput from '@/components/CustomInput';
import { notificar } from '@/components/Notificacao';
import { estadoInicial } from '@/contexts/TaskContext/TaskContext';
import { Save } from 'lucide-react';
import React, { use, useEffect } from 'react';

const Inicio: React.FC = () => {
    const [estadoFoco, setEstadoFoco] = React.useState(estadoInicial.config.tempoTrabalho || '');
    const [estadoDescansoCurto, setEstadoDescansoCurto] = React.useState(estadoInicial.config.tempoDescansoCurto || '');
    const [estadoDescansoLongo, setEstadoDescansoLongo] = React.useState(estadoInicial.config.tempoDescansoLongo || '');

    useEffect(() => {
        const foco = Number(localStorage.getItem('tempoTrabalho'));
        const descansoCurto = Number(localStorage.getItem('tempoDescansoCurto'));
        const descansoLongo = Number(localStorage.getItem('tempoDescansoLongo'));

        setEstadoFoco(foco);
        setEstadoDescansoCurto(descansoCurto);
        setEstadoDescansoLongo(descansoLongo);
    }, []);

    const handleSalvarConfiguracoes = () => {
        localStorage.setItem('tempoTrabalho', estadoFoco.toString());
        localStorage.setItem('tempoDescansoCurto', estadoDescansoCurto.toString());
        localStorage.setItem('tempoDescansoLongo', estadoDescansoLongo.toString());
        notificar('Configurações salvas com sucesso!');
    };

    return (
        <div className='grid-rows-[auto-1fr-auto] '>
            <h1 className='text-md font-bold mb-4 '>
                Configure os minutos de cada etapa do pomodoro
            </h1>
            <div className='flex-col text-center text-xl space-y-9'>
                <EditInput
                    id='foco'
                    titulo='Foco (minutos)'
                    type='text'
                    value={estadoFoco}
                    onChange={(e) => setEstadoFoco(e.target.value)}
                />
                <EditInput
                    id='descansoCurto'
                    titulo='Descanso Curto (minutos)'
                    type='text'
                    value={estadoDescansoCurto}
                    onChange={(e) => setEstadoDescansoCurto(e.target.value)}
                />
                <EditInput
                    id='descansoLongo'
                    titulo='Descanso Longo (minutos)'
                    type='text'
                    value={estadoDescansoLongo}
                    onChange={(e) => setEstadoDescansoLongo(e.target.value)}
                />
                <CustomButton
                    className={`text-texto-padrao rounded-md border-0  p-2 px-17 bg-play hover:bg-play-hover
                                lg:p-3 lg:px-31 `}
                    title='Salvar Configurações'
                    aria-label='Salvar Configurações'
                    icone={<Save />}
                    onClick={handleSalvarConfiguracoes}
                />
            </div>
        </div>
    )
}

export default Inicio;
