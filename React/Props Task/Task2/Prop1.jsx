import Prop2 from './Prop2.jsx'

function Prop1(){
    const a = {
        name:'Keval',
        col:'LJU'
    }

    return(
        <>
        <Prop2 obj={a}/>
        </>
    )
}

export default Prop1