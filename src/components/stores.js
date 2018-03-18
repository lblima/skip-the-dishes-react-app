import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/store';
import Store from './store';

class Stores extends Component {

    componentWillMount() {
        this.props.fetchStores();
    }

    renderStores(store) {
        return (
            <Store key={store.id} name={store.name} />
        )
    }

    render() {
        if (!this.props.storeList) {
            return <div>loading stores...</div>
        }

        return (
            <div>
                <h1>Choose one of our partner stores</h1>
                <ul>
                    { this.props.storeList.map(this.renderStores) }
                </ul>
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