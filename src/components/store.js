import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Store extends Component {

    render() {
        return (
            <li>
                { this.props.name }
            </li>
        )
    }
}