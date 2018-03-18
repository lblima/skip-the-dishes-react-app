import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/cart';

class Cart extends Component {

    placeNewOrder() {

        const newOrder =  {
            deliveryAddress: "user address",
            contact: "user name",
            storeId: 3,
            orderItems: this.props.cart.items.map(item => ({ productId: item.productId, quantity: item.quantity })),
            status: "WAITING"
            };
        
        this.props.placeNewOrder(newOrder);
    }

    renderCartItems(item) {
        console.log(item);

        return (
            <div className="card" key={ item.productId }>
                <div className="card-body">
                    <h5 className="card-title">{ item.productName }</h5>
                    <p className="card-text">
                    <span className="checkout-quantity">{ item.quantity } x </span>
                    <span className="checkout-price">{ item.productPrice }</span>
                    </p>
                </div>
            </div>
        )
    }

    render() {

        console.log(this.props.cart.items)
        if (this.props.cart.items && this.props.cart.items.length == 0) {
            return (
                <div className="container">
                    <h1>Checkout</h1>
                    <h2>Your cart is empty</h2>
                </div>
            )
        }

        return (
            <div className="container">
                <h1>Checkout</h1>
                { this.props.cart.items.map(this.renderCartItems) }
                <br/>
                <button type="submit" onClick={() => this.placeNewOrder()} className="btn btn-primary">Checkout</button>
            </div>
        )
    }
}

function mapStateToProps({ cart, order }) {
    return {
        cart,
        order
    }
}

export default connect(mapStateToProps, actions)(Cart);