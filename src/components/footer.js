import React from 'react'

//Assets
import logo from '../static/images/logo2.svg'

function Footer() {
    return <footer className="footer">
        <div className="footer-title">
            <img src={logo} alt="Logo de la empresa" />
        </div>
        <div>
            <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analitycs</li>
            </ul>
            <ul>
                <li>Blog</li>
                <li>Developer</li>
                <li>Support</li>
        </ul>
            <ul>
                <li>About</li>
                <li>Our team</li>
                <li>Careers</li>
        <li>Contact</li>
            </ul>
        </div>
    </footer>
}

export default Footer;