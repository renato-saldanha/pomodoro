import { useReducer } from "react";
import { estadoInicial, TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
    children: React.ReactNode;
}



export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({children}) =>  {
    const [state, dispatch] = useReducer(taskReducer, estadoInicial);

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}