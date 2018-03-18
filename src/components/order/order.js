import React, { Component } from 'react';

export default class Order extends Component {

     render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.id }</h5>
                    <p className="card-text">
                        <span className="checkout-price">testessssss</span>
                    </p>
                </div>
            </div>
        )
    }
}