import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/product';
import Product from './product';

class StoreProducts extends Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.fetchProductsByStore(id);
    }

    renderProducts(product) {
        return (
            <Product key={product.id} name={product.name} 
                            description={product.description} price={product.price} />
        )
    }

    render() {
        if (!this.props.productList) {
            return <div>loading products...</div>
        }

        return (
            <div class="container">
                <h1>Choose your products and add to cart</h1>
                { this.props.productList.map(this.renderProducts) }
            </div>
        )
    }
}

function mapStateToProps({ product: { productList }}) {
    return {
        productList
    };
}

export default connect(mapStateToProps, actions)(StoreProducts);