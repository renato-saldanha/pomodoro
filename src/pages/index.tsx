import React, { useEffect, useState } from "react";

import { Play, StopCircle } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Ciclos, { Ciclo } from "@/components/Ciclos";


type HomeProps = {

};

const Home : React.FC<HomeProps> = () => {
    const [executando, setExecutando] = useState(false);
    const [ordemCiclo, setOrdemCiclo] = useState(1);
    const [numeroCiclo, setNumeroCiclo] = useState(1);
    const [ciclos, setCiclos] = useState<Ciclo[]>([
        {   numeroCiclo: 1, trabalho: false, descanso: false,  },
        {   numeroCiclo: 2, trabalho: false, descanso: false,  },
        {   numeroCiclo: 3, trabalho: false, descanso: false,  },
        {   numeroCiclo: 4, trabalho: false, descanso: false,  },
    ]);

    const pararExecucao = () => {
        setExecutando(false);
        
        // setNumeroCiclo(1);
        // setOrdemCiclo(1);
    }

    const handleCicloTrabalho = (numeroCiclo: number) => {
        setCiclos(prev => prev.map(c => 
            c.numeroCiclo === numeroCiclo 
            ? { ...c, trabalho: true } 
            : c
        ));
    };

    const handleCicloDescanso = (numeroCiclo: number) => {
        setCiclos(prev => prev.map(c => 
            c.numeroCiclo === numeroCiclo 
            ? { ...c, descanso: true }
            : c
        ));
    };

    const resetarCiclo = () => {
        setCiclos(prev => prev.map(c => ({ ...c, trabalho: false, descanso: false })));
    };  

    const iniciarExecucao = () => { 
        setExecutando(true); 
        
        if (ordemCiclo === 1) {
            handleCicloTrabalho(numeroCiclo);
            setOrdemCiclo(2);               
        } else if (numeroCiclo == 4 && ordemCiclo == 2) {              
            handleCicloDescanso(numeroCiclo);
            setOrdemCiclo(prev => prev + 1);
        } else {
            handleCicloDescanso(numeroCiclo);
            setOrdemCiclo(1);    
                        
            if (numeroCiclo < 4) {
                setNumeroCiclo(prev => prev + 1);
            } else if (numeroCiclo == 4 && ordemCiclo > 2) {
                resetarCiclo();
                setOrdemCiclo(1);          
                setNumeroCiclo(1);                                                
                handleCicloTrabalho(1);
                setOrdemCiclo(2);  
            }           
        }
    }

    const handlePlayStopClick = () => {
        if (executando) {
            pararExecucao();
        } else {
            iniciarExecucao();
        }
    }

    useEffect(() => {},[ciclos]);

    return (
        <div className="form flex-1  
                         xl:space-y-10">
            <Contador
                valor="00:10"/>
            <Task   
              id='task'              
              type="text"
              titulo="task"
              placeholder="Estudar"
              />
            <div >
                <p>Nesse ciclo {} por {}</p>                
            </div>
            <Ciclos ciclos={ciclos}/>
            <div>                
                <CustomButton 
                    id='PlayStop'
                    className={`text-texto-padrao rounded-md border-0  p-2 px-17 ${!executando ? 'bg-play hover:bg-play-hover' : 'bg-erro hover:bg-erro-hover'} 
                                lg:p-3 lg:px-31 `}
                    icone={!executando ? <Play size={35}/> : <StopCircle size={35}/>}
                    onClick={() => handlePlayStopClick()}/>                        
            </div>
        </div>   
    )
}

export default Home;
 