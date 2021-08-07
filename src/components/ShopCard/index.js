import React, { Component } from "react";

import "./style.css"

class ShopCard extends Component {
    render() {
        return (
            <div className="shop-card">
                <img src={this.props.image} alt="imagen" />
                <div className="shop-product-description">
                    <h3 className="title">{this.props.name}</h3>
                    <p className="price">${this.props.price}</p>
                </div>
                <button className="add-to-cart">Add to Cart</button>
                <button className="quick-view">quick view</button>
            </div>
        )
    }
}

export default ShopCard;