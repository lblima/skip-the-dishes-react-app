import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {

    render() {
        return (
            <div>
                { this.props.name }
            </div>
        )
    }
}