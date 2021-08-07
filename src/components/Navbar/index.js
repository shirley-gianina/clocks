import React, { Component } from "react";

import "./style.css"

class Navbar extends Component {
    render() {
        return (
            <section class="container header-menu">
                <h1>rochette</h1>
                <h3>exclusive swiss made watches</h3>
            <nav className="container-menu">
                <ol className="links">
                    <li>
                        <a className="link active" href="/">home</a>
                    </li>
                    <li>
                        <a className="link" href="/shop">shop</a>
                    </li>
                    <li>
                        <a className="link" href="/about">about</a>
                    </li>
                    <li>
                        <a className="link" href="/faq">faq</a>
                    </li>
                    <li>
                        <a className="link" href="/contact">contact</a>
                    </li>
                    <li>
                        <a href="/profile" className="circle"><i className="fas fa-user-circle"></i></a>
                        <a href="/login" className="login">log in</a>  
                    </li>
                    <li>
                        <a className="buy" href="shopping">
                            <i className="fas fa-shopping-bag"></i>
                        </a>
                    </li>
                </ol> 
            </nav>
        </section>
        )

    }
}

export default Navbar; 