import  Link  from 'next/link';
import React from 'react';

type FooterProps = {

}

const Footer : React.FC<FooterProps> = () => {
    return (
        <footer className='flex flex-col justify-center items-center h-30min-h-screen text-lg'>
            <Link href='/'
                className='text-link-cor hover:text-link-hover'>
                Quer Saber mais sobre a técnica pomodoro?
            </Link>
            <p >Pomodoro Tasks © 2025</p>
        </footer>
    );
}

export default Footer;