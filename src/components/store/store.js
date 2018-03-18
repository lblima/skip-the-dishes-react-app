import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Store extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.name }</h5>
                    <p className="card-text">{ this.props.address }</p>
                    <Link 
                        to={`/storeproducts/${this.props.id}`} 
                        className="btn btn-primary">Choose the Dish
                    </Link>
                </div>
            </div>
        )
    }
}