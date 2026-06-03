import { createContext } from "react";
import Uc2 from './Uc2'

const Mystyle = createContext()


function Comp1(){
   
    return(
        <>
        <Mystyle.Provider value={{color:'tomato'}}>
            <Uc2/>
        </Mystyle.Provider>
        </>
    )
}

export default Comp1
export {Mystyle}