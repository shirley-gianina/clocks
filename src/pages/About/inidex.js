import React, { Component } from "react";

import "./style.css"

class About extends Component {
    render() {
        return (
            <section className="container content-about">
                <div className="left-about">
                    <h2>about</h2>
                </div>
                <div className="right-about">
                    <div className="row-about">
                        <div className="description-about">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nostrum excepturi sapiente fugit quidem temporibus, deserunt, incidunt expedita, quod unde dolorem vero cupiditate aliquid. Aspernatur debitis dolorum sit iusto nihil Lorem ipsum dolor, sit.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nostrum excepturi sapiente fugit quidem temporibus, deserunt, incidunt expedita, quod unde dolorem vero cupiditate aliquid. Aspernatur debitis dolorum sit iusto nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae, rem eos accusantium dolores maxime earum.</p>
                        </div>
                        <div className="image-about">
                            <img src="https://shirley-gianina.github.io/clocks/assets/imgabout.webp" alt="imagen" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;