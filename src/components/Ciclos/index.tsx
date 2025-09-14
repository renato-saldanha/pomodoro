import React, { InputHTMLAttributes, useState } from 'react';


export type Ciclo = {
    numeroCiclo: number;
    trabalho: boolean;
    descanso: boolean;    
}

type CiclosProps = {    
    ciclos: Ciclo[];
};

const CustomInput  : React.FC<CiclosProps & InputHTMLAttributes<HTMLInputElement>> = ({ciclos, ...props}) => {
    return (
        <div className=" text-primario">
            <p>Ciclos:</p>
            <div className='flex items-center justify-center'>
                {ciclos && ciclos.length > 0 && (
                     ciclos.map((ciclo) => (
                        <div key={ciclo.numeroCiclo} className="flex flex-row items-center">                            
                            {ciclo.trabalho && (
                                <div className="text-primario text-xl">●</div>
                            )}
                            {ciclo.descanso && (
                                <div className={`text-xl ${ciclo.numeroCiclo == 4 ? 'text-play' : 'text-aviso'}`}>●</div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
        
    )
}

export default CustomInput;


