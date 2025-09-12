import React from "react";

type HomeProps = {

};

const Inicio : React.FC<HomeProps> = () => {
    return (
        <main className="space-y-15">
            <div className="text-9xl"> 00:00 </div>
            <div>
                <p>task:</p>
                <label>teste</label>                
            </div>
            <div>
                <p>Nesse ciclo {} por {}</p>                
            </div>
            <div className="text-aviso ">
                <p>Ciclos:</p>
                <div > ● </div>
            </div>
                    
        </main>   
    )
}

export default Inicio;
 