import React from 'react'

//Assets
import logo from '../static/images/logo2.svg'
import facebook from '../static/images/icon-facebook.svg'
import instagram from '../static/images/icon-instagram.svg'
import pinterest from '../static/images/icon-pinterest.svg'
import twitter from '../static/images/icon-twitter.svg'

function Footer() {
    return <footer className="footer">
        <div className="footer-title">
            <img src={logo} alt="Logo de la empresa" />
        </div>
        <div className="nav">
            <h3>Features</h3>
        <ul className="list-nav-footer">
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analitycs</li>
            </ul>
            <h3>Resources</h3>
            <ul className="list-nav-footer">
                <li>Blog</li>
                <li>Developer</li>
                <li>Support</li>
        </ul>
        <h3>Company</h3>
            <ul className="list-nav-footer">
                <li>About</li>
                <li>Our team</li>
                <li>Careers</li>
        <li>Contact</li>
            </ul>
        </div>
        <div className="social-media">
            <figure>
                <img className="img-responsive" alt="logo de facebook" src={facebook} />
            </figure>
            <figure>
                <img className="img-responsive" alt="logo de twitter" src={twitter}/>
            </figure>
            <figure>
                <img className="img-responsive" alt="logo de pinterest" src={pinterest}/>
            </figure>
            <figure>
                <img className="img-responsive" alt="logo de instagram" src={instagram}/>
            </figure>
        </div>
    </footer>
}

export default Footer;