import { House, ClockPlus, ClockIcon, Bolt, SunMoon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton';
import { useRouter } from 'next/router';

type HeaderProps = {
    props?: 1;
}

type Temas = 'claro' | 'escuro';

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter();
    const [tema, setTema] = useState<Temas>('escuro');

    const goHome = () => router.push('/');
    const goHistorico = () => router.push('/Historico');
    const goConfiguracao = () => router.push('/Configuracao');

    const handleMudarTema = () => {
        setTema(prevTema => {
            const nextTema = prevTema === 'escuro' ? 'claro' : 'escuro';
            return nextTema;
        });
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema') as Temas;
        if (temaSalvo) setTema(temaSalvo);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', tema);
        localStorage.setItem('tema', tema);
    }, [tema]);

    return (
        <header className='flex flex-col items-center justify-items-start space-y-3 my-3
                           lg:mt-15 lg:space-y-10'>
            <ClockIcon size={50} />

            <h1 className='text-3xl font-bold
                           lg:text-5xl '>Pomodoro Task</h1>

            <div className='flex space-x-5 mt-2
                            lg:mt-5'>
                <CustomButton
                    onClick={goHome}
                    icone={<House size={35} />}
                    aria-label='Ir Home'
                    title='Ir Home' />
                <CustomButton
                    onClick={goHistorico}
                    icone={<ClockPlus size={35} />}
                    aria-label='Ver Histórico'
                    title='Ver Histórico' />
                <CustomButton
                    onClick={goConfiguracao}
                    icone={<Bolt size={35} />}
                    aria-label='Configuração'
                    title='Configuração' />
                <CustomButton
                    onClick={handleMudarTema}
                    icone={<SunMoon size={35} />}
                    aria-label='Mudar Cor do Tema'
                    title='Mudar Cor do Tema' />
            </div>
        </header>
    )
}

export default Header;