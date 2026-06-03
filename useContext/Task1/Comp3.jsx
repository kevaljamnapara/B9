import { useContext } from "react";
import { N1, N2 } from './Comp1'

function Comp3(){
    const n1 = useContext(N1)
    const n2 = useContext(N2)   

    return(
        <>
        <h1>Multiplication of {n1} and {n2} is : {n1*n2}</h1>
        </>
    )
}

export default Comp3