import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../skip_logo.svg';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signout">Sign out</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/stores">Stores</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link className="nav-link" to="/cart">Go to Cart</Link>
                </li>
            ]
        }
        else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign in</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign up</Link>
                </li>
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* <Link to="/" className="navbar-brand">Skip The Dishes App - Welcome</Link> */}
                <a className="navbar-brand" href="/">
                    Skip the Dishes
                    {/* <img src={logo} alt="Skip the Dishes" /> */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        { this.renderLinks() }
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth: { authenticated }}) {
    return {
        authenticated
    }
}

export default connect(mapStateToProps, null)(Header);