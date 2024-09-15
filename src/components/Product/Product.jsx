import { useState } from 'react'
import './Product.css'


export default function Product(props) {

    const [product, setProduct] = useState(props.product);

    function decreaseQuantity(product) {
        if (product.quantity <= 1) return;
        const updatedProduct = {
            ...product,
            quantity: product.quantity - 1,
            total_price: parseFloat((product.price * (product.quantity - 1)).toFixed(2))
        };
        setProduct(updatedProduct);
        props.onStateChange(updatedProduct);
    }

    function increaseQuantity(product) {
        const updatedProduct = {
            ...product,
            quantity: product.quantity + 1,
            total_price: parseFloat((product.price * (product.quantity + 1)).toFixed(2))
        };
        setProduct(updatedProduct);
        props.onStateChange(updatedProduct);
    }

    return (
        <div className="product-item">
            <img src={product.image} alt="Product 1" />
            <h5>{product.title}</h5>
            <div className="price">${product.total_price}</div>
            <div className="quantity-control">
                <button className="decrease-btn" onClick={() => decreaseQuantity(product)}>-</button>
                <span id="quantity">{product.quantity}</span>
                <button className="increase-btn" onClick={() => increaseQuantity(product)}>+</button>
            </div>
        </div>
    )
}