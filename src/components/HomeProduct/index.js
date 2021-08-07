import React, { Component } from "react";

import "./style.css"

class HomeProduct extends Component {
    render() {
        return (
            <div class="card-image">
                <img src={this.props.image} alt="imagen"/>
                <div class="product-description">
                    <p class="title">{this.props.name}</p>
                    <p class="price">${this.props.price}</p>
                </div>    
                <button class="view-details">View Details</button>
            </div>
        )
    }
}

export default HomeProduct;