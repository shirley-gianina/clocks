import React, { Component } from "react";

import "./style.css"

class Contact extends Component {
    render() {
        return (
            <section className="container content-contact">
                <div className="left-contact">
                    <h2>contact</h2>
                </div>
                <div className="right-contact">
                    <div className="row-contact">
                        <div className="description-contact">
                            <p>500 terry francois st.</p>
                            <p>san francisco, ca 94158</p>
                            <a className="email" href="malito:info@example.com">info@example.com</a>
                            <p>tel: 123-345-0695</p>
                            <form className="contact-form">
                                <div className="subscribe-left">
                                    <input className="name" type="text" placeholder="name" />
                                    <input className="email" type="text" placeholder="email" />
                                    <input className="subject" type="text" placeholder="subject" />
                                </div>
                                <textarea className="subscribe-right" placeholder="message"></textarea>
                                <a className="submit" href="submit">submit</a>
                            </form>
                        </div>
                        <div className="image-map">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.356280306567!2d-122.3958580990426!3d37.77037147774817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fc4fe7ace37%3A0xfa1746dd4faeb818!2s500%20Terry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094158%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1595319138370!5m2!1ses!2ses" width="400" height="200" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Contact;