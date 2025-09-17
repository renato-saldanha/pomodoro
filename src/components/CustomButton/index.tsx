import React, { ButtonHTMLAttributes } from 'react';


type CustomButtonProps = {
    icone:  React.ReactNode;
    className?: string;
};

const CustomButton : React.FC<ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps> = ({icone, className = '', ...props}) => {
    
    return (
        <button 
            className={`text-primario border rounded-md p-1 cursor-pointer hover:text-primario-escuro 
                        transition transform hover:scale-103 ${className}`}
            {...props}
        >
            {icone}    
        </button>
    )
}

export default CustomButton;