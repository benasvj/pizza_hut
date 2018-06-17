import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" to="/pizza">Pizza</NavLink>
                <NavLink exact activeClassName="active" to="/drinks">Drinks</NavLink>
                <NavLink exact activeClassName="active" to="/checkout">CheckOut</NavLink>
            </header>
        );
    };
};

export default Header;