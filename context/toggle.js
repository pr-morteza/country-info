import { createContext, useState } from "react";

const ToggleContext = createContext()

export function ToggleProvider({children}){
    const [mode, setMode] = useState(true)
    const [spin, setSpin] = useState(false)
    
    return (
        <ToggleContext.Provider value={{mode, setMode,spin, setSpin}}>
            {children}
        </ToggleContext.Provider>
    )
}
export default ToggleContext;