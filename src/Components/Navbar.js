import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#">page1</a>
                    </li>
                    
                    <li class="nav-item ">
                        <a class="nav-link " href="#">pag2</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )

}

export default Navbar;