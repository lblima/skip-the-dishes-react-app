import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{ this.props.name }</h5>
                    <p class="card-text">{ this.props.description }</p>
                    <p class="card-text">$ { this.props.price }</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        )
    }
}