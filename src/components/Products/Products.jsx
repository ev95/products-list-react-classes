import Product from '../Product/Product.jsx';
import { useState } from 'react'
import './Products.css';

function Products(props) {

    const [products, setPraducts] = useState(props.products_list);

    function handleProductStateChange(changedProduct) {
        const newArr = products.map(product => {
            if (product.id === changedProduct.id) {
                return {
                    ...product,
                    total_price: changedProduct.total_price,
                    quantity: changedProduct.quantity
                }
            } else {
                return product;
            }
        })
        // console.log(newArr);
        setPraducts([...newArr]);
        // Products not updated ????
        // console.log(products)
    }


    return (
        <div className="produsts">
            <h1>Products</h1>
            <div className="products-list">
                {
                    products.map((product) => {
                        return (
                            <Product key={product.id} product={product} onStateChange={handleProductStateChange} />
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Products