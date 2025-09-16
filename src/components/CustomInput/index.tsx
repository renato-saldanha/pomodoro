import React, { Ref } from 'react';


type ContadorProps = {
    titulo: string;    
    ref: Ref<HTMLInputElement>;
};

const CustomInput  : React.FC<ContadorProps & React.InputHTMLAttributes<HTMLInputElement>> = ({titulo, ref, ...props}) => {
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <label htmlFor={props.id}>{titulo || 'task'}:</label>
            <input 
                ref={ref}        
                className="text-center cursor-pointer hover:rounded-md border border-gray-900 hover:border hover:border-primario-claro p-1" 
                {...props}/>
        </div>
    )
}

export default CustomInput;
