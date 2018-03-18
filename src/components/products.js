import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/product';
import Product from './product';

class Products extends Component {

    componentWillMount() {
        this.props.fetchStores();
    }

    renderProducts(product) {
        return (
            <Store key={stproductore.id} name={product.name} />
        )
    }

    render() {
        if (!this.props.storeList) {
            return <div>loading products...</div>
        }

        return (
            <div>
                <h1>Choose your products and add to cart</h1>
                <ul>
                    { this.props.productList.map(this.renderProducts) }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ product: { productList }}) {
    return {
        productList
    };
}

export default connect(mapStateToProps, actions)(Products);