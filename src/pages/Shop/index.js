import React, { Component } from "react"
import "./style.css"
import ShopCard from "../../components/ShopCard"
import { products } from "./data"

class Shop extends Component {
    render() {
        const shopProducts = products.map((product, i) => {
            return (
                <ShopCard
                    key={i}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                />
            )
        })
        return (
            <section className="container shop-products">
                <div className="left-side">
                    <h2>shop</h2>
                </div>
                <div className="right-side">
                    <div className="row">
                        {shopProducts}
                    </div>
                </div>
            </section>
        )
    }
}

export default Shop;