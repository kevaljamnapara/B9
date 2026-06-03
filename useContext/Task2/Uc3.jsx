import { useContext } from "react";
import {Mystyle} from './Uc1'
import {Mymsg} from './Uc2'

function Uc3(){
    const style = useContext(Mystyle)
    const msg = useContext(Mymsg)   

    return(
        <>
            <div style={style}> {msg}</div>
        </>
    )
}

export default Uc3