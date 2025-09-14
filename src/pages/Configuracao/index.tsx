import React from "react";

import { Play } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

type ConfiguracaoProps = {

};

const Inicio : React.FC<ConfiguracaoProps> = () => {
    return (
        <div className="flex flex-1 items-center justify-center">
            Configuração
        </div>   
    )
}

export default Inicio;
 