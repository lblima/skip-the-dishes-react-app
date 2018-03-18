import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/product';
import Product from './product';

import '../components.css';

class StoreProducts extends Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.fetchProductsByStore(id);
    }

    renderProducts(product) {
        return (
            <Product key={product.id} 
                            productId={product.id}
                            name={product.name} 
                            description={product.description} 
                            price={product.price}
                            storeId={product.storeId} />
        )
    }

    render() {
        console.log(this.props.productList)
        if (!this.props.productList) {
            return <div className="loading"></div>
        }

        const totalItemOnCart = this.props.cart.items.length;
        const pageTitle = <h1>Choose your products and add to cart (items on cart: {totalItemOnCart})</h1>

        return (
            <div className="container">
                { pageTitle }
                { this.props.productList.map(this.renderProducts) }
                <Link to="/stores" className="btn btn-danger btn-cancel float-right">back</Link>
            </div>
        )
    }
}

function mapStateToProps({ cart, product: { productList }}) {
    return {
        productList,
        cart
    };
}

export default connect(mapStateToProps, actions)(StoreProducts);