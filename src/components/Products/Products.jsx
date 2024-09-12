import React from 'react'
import './Products.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.state = {
            products: this.props.products_list
        }

    }

    decreaseQuantity(product) {
        if (product.quantity <= 1) return;
        product.quantity = --product.quantity;
        product.total_price = parseFloat((product.price * product.quantity).toFixed(2));
        this.setState({ products: this.state.products })
        console.log(product);
    }

    increaseQuantity(product) {
        product.quantity = ++product.quantity;
        product.total_price = parseFloat((product.price * product.quantity).toFixed(2));
        this.setState({ products: this.state.products })
        console.log(product, 'Product');
    }

    render() {
        return (
            <div className="produsts">
                <h1>Products</h1>
                <div className="products-list">
                    {
                        this.state.products.map((product) => {
                            return (<div className="product-item">
                                <img src={product.image} alt="Product 1" />
                                <h5>{product.title}</h5>
                                <div className="price">${product.total_price}</div>
                                <div className="quantity-control">
                                    <button className="decrease-btn" onClick={() => this.decreaseQuantity(product)}>-</button>
                                    <span id="quantity">{product.quantity}</span>
                                    <button className="increase-btn" onClick={() => this.increaseQuantity(product)}>+</button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Products