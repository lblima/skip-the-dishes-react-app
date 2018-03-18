import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/store';
import Store from './store';

import './components.css';

class Stores extends Component {

    componentWillMount() {
        this.props.fetchStores();
    }

    renderStores(store) {
        return (
            <Store key={store.id} id={store.id} name={store.name} address={store.address} />
        )
    }

    render() {
        if (!this.props.storeList) {
            return <div className="loading"></div>
        }

        return (
            <div className="container">
                <h1>Choose one of our partner stores</h1>
                { this.props.storeList.map(this.renderStores) }
            </div>
        )
    }
}

function mapStateToProps({ store: { storeList }}) {
    return {
        storeList
    };
}

export default connect(mapStateToProps, actions)(Stores);