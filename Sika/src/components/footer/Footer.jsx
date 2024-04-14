import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__container">
                    <h1 className="footer__title">Sika Danquah</h1>
                    <div className="footer__social">
                        <a href="#" className="footer__link">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a
                            href="https://github.com/bedimcode"
                            className="footer__link"
                            id="profile-link"
                            target="_blank"
                        >
                            <i className="bx bxl-github" />
                        </a>
                        <a href="#" className="footer__link">
                            <i className="bx bxl-figma" />
                        </a>
                        <a href="#" className="footer__link">
                            <i className="bx bxl-codepen" />
                        </a>
                        <a href="#" className="footer__link">
                            <i className="fas fa-bolt" />
                        </a>
                    </div>
                    <p className="footer__copy">
                        © 2024 Sika Danquah. All rights reserved
                    </p>
                </div>
            </footer>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    );
};

export default Footer;
