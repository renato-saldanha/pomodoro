import { useState } from "react";
import { estadoInicial, TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({children}) =>  {
    const [state, setState] = useState(estadoInicial);
  
    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    )
}