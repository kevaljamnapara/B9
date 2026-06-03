import { createContext } from "react";
import Comp2 from './Comp2'

const N1 = createContext()
const N2 = createContext()

function Comp1(){
    return(
        <>
        <N1.Provider value={111}>
            <N2.Provider value={4}>
                <Comp2/>
            </N2.Provider>
        </N1.Provider>
        </>
    )
}

export default Comp1
export {N1,N2}