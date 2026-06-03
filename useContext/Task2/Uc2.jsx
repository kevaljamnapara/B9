import { createContext } from 'react'
import Uc3 from './Uc3'

const Mymsg = createContext()
function Uc2(){
    return(
        <>
        <Mymsg.Provider value='Welcome Keval'>
            <Uc3/>
        </Mymsg.Provider>
        </>
    )
}

export default Uc2
export {Mymsg}