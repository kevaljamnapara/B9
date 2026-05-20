import Prop2 from './Prop2.jsx'

function Prop1(){
    const a = {
        name:'Keval',
        number:277,
        marks:21
    }

    return(
        <>
        <Prop2 obj={a}/>
        </>
    )
}

export default Prop1