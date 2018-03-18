import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/order';
import Order from './order';

class OrderList extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    renderOrderItems(order) {
        console.log('renderOrderItems', order);

        return (
            <Order key={ order.id } id={ order.id } />
        )
    }

    render() {

        console.log('render', this.props.orderList)
        if (this.props.orderList && this.props.orderList.length == 0) {
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
                { this.props.orderList.map(this.renderOrderItems) }
                <br/>
                <Link to="/stores" className="btn btn-danger btn-cancel float-right">back</Link>
            </div>
        )
    }
}

function mapStateToProps({ order: { orderList } }) {
    return {
        orderList
    }
}

export default connect(mapStateToProps, actions)(OrderList);