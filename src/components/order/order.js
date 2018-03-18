import React, { Component } from 'react';

export default class Order extends Component {

    renderItems(item) {
        return (
            <div key={item.product.id} className="checkout-price">{ item.product.name }</div>
        )
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.id }</h5>
                    <p className="card-text">
                        { this.props.items.map(this.renderItems) }                        
                    </p>
                </div>
            </div>
        )
    }
}