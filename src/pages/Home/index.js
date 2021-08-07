import React, { Component } from "react"

import HomeProduct from "../../components/HomeProduct";
import { products } from "./data";

import "./style.css"

class Home extends Component {
    render() {
        const homeProducts = products.map((product, i) => {
            return (
                <HomeProduct
                    key={i}
                    name={product.name}
                    image={product.image}
                    price={product.price} />
            )
        })
        return (
            <>
                <section>
                    <div className=" container body-content">
                        <div className="slider">
                            <ul>
                                <li>
                                    <img src="assets/header.webp" alt="" />
                                </li>
                                <li>
                                    <img src="assets/header1.webp" alt="" />
                                </li>
                                <li>
                                    <img src="assets/header2.webp" alt="" />
                                </li>
                                <li>
                                    <img src="assets/header3.webp" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h5>timeless quality</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum mollitia quaerat accusamus, quos aliquam.</p>
                            <button className="shop-button">
                                <a href="/shop">shop now</a>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="container products">
                    {homeProducts}
                </section>
            </>
        )
    }
}

export default Home;