import React, { Component } from "react";
import Accordion from "../../components/Accordion";
import Quantity from "../../components/Quantity";

import "./style.css"

class ProductDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between pb-5">
                    <ol className="breadcrumb my-1">
                        <li className="breadcrumb-item">
                            <a className="text-dark text-decoration-none" href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a className="text-dark text-decoration-none" href="/">Shop</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a className="text-dark text-decoration-none" href="/">BLACK JET</a>
                        </li>
                    </ol>
                    <ul className="pagination">
                        <li>
                            <a className="text-decoration-none text-dark" href="/" aria-label="Next">
                                <span className="pe-3" ><ion-icon name="chevron-back-outline"></ion-icon>Next</span>
                            </a>
                        </li>
                        <span>|</span>
                        <li>
                            <a className="text-dark text-decoration-none" href="/" aria-label="Prev">
                                <span className="ps-3" >Prev<ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="d-flex align-items-center border">
                            <img src="https://static.wixstatic.com/media/a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.webp" alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="my-5">
                            <p>I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="title">
                            <h5 className="fs-3 text-dark">BLACK JET</h5>
                            <p className="text-muted">SKU: 0001</p>
                        </div>
                        <div className="price">
                            <p>79.00$</p>
                        </div>
                        <div>
                            <p className="text-muted">Color</p>
                            <span className="text-danger fs-3">
                                <ion-icon name="ellipse"></ion-icon>
                            </span>
                            <span className="text-warning fs-3 ms-2">
                                <ion-icon name="ellipse"></ion-icon>
                            </span>
                        </div>
                        <div>
                            <Quantity />
                        </div>
                        <div className="btn-cart mt-3">
                            <a href="/">Add to Cart</a>
                        </div>
                        <div className="btn-buy mt-3">
                            <a href="/">Buy Now</a>
                        </div>
                        <div>
                            <Accordion 
                                title="PRODUCT INFO"
                                content="I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty."
                            />
                        </div>
                        <div>
                            <Accordion 
                                title="RETURN AND REFUND POLICY"
                                content="I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;