import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.name }</h5>
                    <p className="card-text">{ this.props.description }</p>
                    <p className="card-text">$ { this.props.price }</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        )
    }
}