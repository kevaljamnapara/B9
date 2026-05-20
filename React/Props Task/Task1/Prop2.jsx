function Prop2(props){
    return(
        <>
            <h2>Name : {props.obj.name}</h2>        
            <h2>Roll number : {props.obj.number}</h2>
            <h2>Marks : {props.obj.marks + 1}</h2>        
        </>
    )
}

export default Prop2