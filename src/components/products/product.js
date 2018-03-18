import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/cart';

class Product extends Component {

    addToCart() {

//         const newItem = {
//             deliveryAddress: "user address",
//             contact: "user name",
//             storeId: this.props.storeId,
//   orderItem: [
//     {
//         storeId: this.props.storeId,
//       productId: this.props.productId,
//       quantity: 1
//     }
//   ],
//    status: "WAITING"
// }

        const newItem =  {
            storeId: this.props.storeId,
            productId: this.props.productId,
            productName: this.props.name,
            productDescription: this.props.description,
            productPrice: this.props.price,
            quantity: this.refs.quantity.value
        };
        
        this.props.addToCart(newItem);
    }

    render() {
        const divStyle = {
                            width: '10%',
                            marginRight: '5px'
                        };

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.name }</h5>
                    <p className="card-text">{ this.props.description }</p>
                    <p className="card-text">Price: ${ this.props.price }</p>
                    <div className="input-group-append">
                        <input type="text" ref="quantity" className="form-control" style={divStyle} placeholder="Quantity" />
                        <button type="button" onClick={() => this.addToCart()} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, actions)(Product);