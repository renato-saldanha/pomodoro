import { House, ClockPlus, ClockIcon, Bolt, SunMoon  } from 'lucide-react';
import React from 'react';
import CustomButton from '../CustomButton';
import { useRouter } from 'next/router';

type HeaderProps = {

}

const Header : React.FC<HeaderProps> = () => {
    const router = useRouter();

    const goHome = () => router.push('/');
    const goHistorico = () => router.push('/');
    const goConfiguracao = () => router.push('/');
    // const mudarCor = ;
    
    return(
        <header className='flex flex-col items-center space-y-10 font-bold'>
            <ClockIcon size={50}/>
            <h1 className='text-5xl'>Pomodoro Tasks</h1>

            <div className='flex space-x-4 flex-2'>
                <CustomButton 
                    onClick={()=> goHome}
                    Icone={<House size={35}/>}/>
                <CustomButton 
                    onClick={()=> goHistorico}
                    Icone={<ClockPlus size={35}/>}/>
                <CustomButton 
                    onClick={()=> goConfiguracao}
                    Icone={<Bolt size={35}/>}/>
                <CustomButton 
                    onClick={()=> goHome}
                    Icone={<SunMoon size={35}/>}/>
            </div>            
        </header>
    )
}

export default Header;