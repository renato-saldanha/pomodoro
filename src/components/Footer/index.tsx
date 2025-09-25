import  Link  from 'next/link';
import React from 'react';

type FooterProps = {
    props?: 1;
}

const Footer : React.FC<FooterProps> = () => {
    return (
        <footer className='flex flex-col text-lg m-0'>
            <Link href='/'
                className='text-link-cor hover:text-link-hover'>
                Quer Saber mais sobre a técnica pomodoro?
            </Link>
            <p >Pomodoro Tasks © 2025</p>
        </footer>
    );
}

export default Footer;