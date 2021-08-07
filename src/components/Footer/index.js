import React,{ Component } from "react"

import "./style.css"

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container content-footer">
                    <p>© 2023 by ROCHETTE.Proudly created with Wix.com</p>
                    <div className="social">
                        <a href="www.facebook.com">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="www.twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a  href="www.instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;