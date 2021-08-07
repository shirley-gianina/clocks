import React, { Component } from "react"

import "./style.css"

class Quantity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0
        }
    }
    render() {
        const increment = () => {
            if (this.state.quantity < 10) {
                this.setState({
                    quantity: this.state.quantity + 1
                })
            }
        }

        const decrement = () => {
            if (this.state.quantity > 0) {
                this.setState({
                    quantity: this.state.quantity - 1
                })
            }
        }
        return (
            <div>
                <p className="text-muted">Quantity</p>
                <div className="quantity">
                    <p className="value">{this.state.quantity}</p>
                    <div className="controls">
                        <span onClick={increment}>
                            <ion-icon name="chevron-up"></ion-icon>
                        </span>
                        <span onClick={decrement}>
                            <ion-icon name="chevron-down"></ion-icon>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quantity;