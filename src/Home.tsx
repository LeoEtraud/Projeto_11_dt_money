import { createContext, useContext, useState } from 'react';

const CycleContext = createContext({} as any)

function Controlador() {

    const { state, setState } = useContext(CycleContext)

    return (
        <h1>
            Controlador: {state}
            <button
                onClick={() => {
                    setState(10)
                }}>
                Alterar Ciclo ativo
            </button>
        </h1>
    )

}

function Operador() {

    const { state } = useContext(CycleContext)

    return (
        <h1>Operador: {state}</h1>
    )

}

export function Home() {

    const [state, setState] = useState(0)

    return (
        <CycleContext.Provider value={{ state, setState }}>
            <div>
                <Controlador />
                <Operador />
            </div>
        </CycleContext.Provider>
    )
}