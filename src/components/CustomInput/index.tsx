import React, { InputHTMLAttributes } from 'react';


type ContadorProps = {
    titulo: string;    
};

const CustomInput  : React.FC<ContadorProps & InputHTMLAttributes<HTMLInputElement>> = ({titulo, ...props}) => {
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <label htmlFor='input'>{titulo || 'task'}:</label>
            <input         
                className="text-center cursor-pointer hover:rounded-md border border-gray-900 hover:border hover:border-primario-claro p-1" 
                {...props}/>
        </div>
    )
}

export default CustomInput;
