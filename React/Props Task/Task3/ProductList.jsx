import ProductCard from './ProductCard.jsx'
import phone from './iPhone17.png'

function ProductList(){
    let products = [{
        id: 1,
        name : 'iPhone 17',
        price : 82900,
        ratings : 4.6,
        image : phone
    }]

    return(
        <>
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </>
    )
}

export default ProductList