import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/cart';

class OrderList extends Component {

    // placeNewOrder() {

    //     const newOrder =  {
    //         deliveryAddress: "user address",
    //         contact: "user name",
    //         storeId: this.props.storeId,
    //         orderItem: this.props.cart.items.map(item => ({ productId: item.productId, quantity: item.quantity })),
    //         status: "WAITING"
    //         };
        
    //     this.props.placeNewOrder(newOrder);
    // }

    renderOrderItems(item) {
        console.log(item);

        return (
            <div className="card" key={ item.id }>
                <div className="card-body">
                    <h5 className="card-title">{ item.id }</h5>
                    <p className="card-text">
                    <span className="checkout-price">testessssss</span>
                    </p>
                </div>
            </div>
        )
    }

    render() {

        console.log(this.props.order.items)
        if (this.props.order.items && this.props.order.items.length == 0) {
            return (
                <div className="container">
                    <h1>Orders</h1>
                    <h2>Your don´t have any orders to show</h2>
                </div>
            )
        }

        return (
            <div className="container">
                <h1>Orders</h1>
                { this.props.order.items.map(this.renderOrderItems) }
                <br/>
                <Link to="/stores" className="btn btn-danger btn-cancel float-right">back</Link>
            </div>
        )
    }
}

function mapStateToProps({ order }) {
    return {
        order
    }
}

export default connect(mapStateToProps, actions)(OrderList);