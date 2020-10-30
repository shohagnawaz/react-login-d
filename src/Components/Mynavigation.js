import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Mynavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color: "red"}} to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "red"}} to="/Page1">Page1</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "red"}} to="/Page2">Page2</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "red"}} to="/Page3">Page3</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Mynavigation;