import React, { ButtonHTMLAttributes } from 'react';


type ContadorProps = {
    valor : string;
};

const Contador : React.FC<ContadorProps> = ({...props}) => {
    
    return (
        <div>
            <p 
                className={`text-9xl font-bold text-[clamp(5rem,12vw,7rem)]`}
                {...props}
            >
                {props.valor}    
            </p>
        </div>
    )
}

export default Contador;