function ProductCard(props){
    return(
        <>
            <img src={props.product.image} height={500} width={425} style={{borderRadius:'45px'}}/>
            <h1>Phone Name : {props.product.name}</h1>
            <h2>Price : {props.product.price}</h2>
            <h2>Ratings : {props.product.ratings}</h2>
        </>
    )
}

export default ProductCard