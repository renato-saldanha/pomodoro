import Link from 'next/link';
import React from 'react';

type FooterProps = {
    props?: 1;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="
            w-full mt-auto
            flex flex-col items-center justify-center
            gap-2 sm:gap-3
            py-4 sm:py-6 md:py-8
            px-4
            text-sm sm:text-base md:text-lg
            border-t border-gray-800
            bg-background
        ">
            <Link 
                href='/Sobre'
                className="text-link-cor hover:text-link-hover transition-colors duration-200 hover:underline underline-offset-4">
                Quer saber mais sobre a técnica Pomodoro?
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm">
                Pomodoro Tasks © 2025
            </p>
        </footer>
    );
}

export default Footer;