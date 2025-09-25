import { useReducer, useState } from "react";
import { estadoInicial, TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode;
}



export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({children}) =>  {
    const [state, setState] = useState(estadoInicial);

    type ActionType = {
        type: string;
        payload? : number;
    }

    const [meuState, dispatch] = useReducer(
        (state, action : ActionType) => {
            switch (action.type) {
                case 'INCREMENT':
                    if (!action.payload) return state;
                    return {
                        ...state, segundosRestantes: state.segundosRestantes + action.payload, 
                    }
            }

            return state;
        },
        {
            segundosRestantes: 0,
        }

    )
  
    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
            <h1>{meuState.segundosRestantes}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 1})}>Incrementar</button>
        </TaskContext.Provider>
    )
}