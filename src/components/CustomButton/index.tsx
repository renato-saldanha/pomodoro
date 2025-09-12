import React, { ButtonHTMLAttributes } from 'react';

type CustomButtonProps = {
    Icone :  React.ReactNode
};

const CustomButton : React.FC<ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps> = ({...props}) => {
    
    return (
        <button 
            className='text-primario border rounded-md p-1 cursor-pointer hover:text-primario-escuro 
                        transition transform hover:scale-103 '
            {...props}
        >
        {props.Icone}    
        </button>
    )
}

export default CustomButton;