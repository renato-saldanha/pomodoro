import { House, ClockPlus, ClockIcon, Bolt, SunMoon  } from 'lucide-react';
import React from 'react';
import CustomButton from '../CustomButton';
import { useRouter } from 'next/router';

type HeaderProps = {

}

const Header : React.FC<HeaderProps> = () => {
    const router = useRouter();

    const goHome = () => router.push('/');
    const goHistorico = () => router.push('/Historico');
    const goConfiguracao = () => router.push('/Configuracao');
    // const mudarCor = ;
    
    return(
        <header className='flex flex-col items-center justify-items-start space-y-3 mt-3
                           lg:mt-15 lg:space-y-10'>
            <ClockIcon size={50}/>
            <h1 className='text-3xl font-bold
                           lg:text-5xl '>Pomodoro Tasks</h1>
            
            <div className='flex space-x-5 mt-2
                            lg:mt-5'>
                <CustomButton 
                    onClick={goHome}
                    icone={<House size={35}/>}/>
                <CustomButton 
                    onClick={goHistorico}
                    icone={<ClockPlus size={35}/>}/>
                <CustomButton 
                    onClick={goConfiguracao}
                    icone={<Bolt size={35}/>}/>
                <CustomButton 
                    onClick={goHome}
                    icone={<SunMoon size={35}/>}/>
            </div>            
        </header>
    )
}

export default Header;