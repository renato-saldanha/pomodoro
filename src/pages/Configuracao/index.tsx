import React from "react";


type ConfiguracaoProps = {
    texto: string | 'Configuração';
};

const Inicio : React.FC<ConfiguracaoProps> = ({texto}) => {
    return (
        <div className="flex flex-1 items-center justify-center">
            {texto}
        </div>   
    )
}

export default Inicio;
 