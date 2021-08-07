import React, { Component } from "react"

import "./style.css"

class Accordion extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isActive: false
        }
    }
    render() {

        const toggle = () => {
            if (this.state.isActive === true) {
                this.setState({
                    isActive: false
                })
            } else {
                this.setState({
                    isActive: true
                })
            }
        }

        return (
            <div className="accordion">
            <div className="accordion-header" onClick={toggle}>
                <h6>{this.props.title}</h6>
                {
                    this.state.isActive
                        ? <ion-icon name="remove"></ion-icon>
                        : <ion-icon name="add"></ion-icon>
                }
            </div>
            <div className="accordion-body">
                {
                    this.state.isActive
                        ? <p>{this.props.content}</p>
                        : <></>
                }
            </div>
        </div>
        )
    }
}

export default Accordion;