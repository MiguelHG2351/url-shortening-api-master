import React, { useState } from 'react'

//Assets
import logo from '../static/images/logo2.svg'
import facebook from '../static/images/icon-facebook.svg'
import instagram from '../static/images/icon-instagram.svg'
import pinterest from '../static/images/icon-pinterest.svg'
import twitter from '../static/images/icon-twitter.svg'
import facebook2 from '../static/images/icon-facebook-active.svg'
import instagram2 from '../static/images/icon-instagram-active.svg'
import pinterest2 from '../static/images/icon-pinterest-active.svg'
import twitter2 from '../static/images/icon-twitter-active.svg'

function Footer() {

    const [Facebook, setFacebook] = useState(facebook)
    const [Twitter, setTwitter] = useState(twitter)
    const [Pinterest, setPinterest] = useState(pinterest)
    const [Instagram, setInstagram] = useState(instagram)

    function facebookF(e) {
        if (Facebook === facebook) {
            setFacebook(facebook2)
        } else {
            setFacebook(facebook)
        }
    }
    function instagramF(e) {
        
        if (Instagram === instagram) {
            setInstagram(instagram2)
        } else {       
            setInstagram(instagram)
        }
    }
    function pinterestF(e) {
        if (Pinterest === pinterest) {
            setPinterest(pinterest2)
        } else {
            setPinterest(pinterest)
        }
        
    }
    function twitterF(e) {
        if (Twitter === twitter) {
            setTwitter(twitter2)
        } else {
            setTwitter(twitter)
        }
        
    }

    return <footer className="footer">
        <div className="footer-title">
            <img src={logo} alt="Logo de la empresa" />
        </div>
        <div className="nav">
        <ul className="list-nav-footer">
            <h3>Features</h3>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analitycs</li>
            </ul>
            <ul className="list-nav-footer">
            <h3>Resources</h3>
                <li>Blog</li>
                <li>Developer</li>
                <li>Support</li>
        </ul>
            <ul className="list-nav-footer">
        <h3>Company</h3>
                <li>About</li>
                <li>Our team</li>
                <li>Careers</li>
        <li>Contact</li>
            </ul>
        </div>
        <div className="social-media">
            <figure>
                <img className="img-responsive" onMouseEnter={facebookF} onMouseLeave={facebookF} alt="logo de facebook" src={Facebook} />
            </figure>
            <figure>
                <img className="img-responsive" onMouseEnter={twitterF} onMouseLeave={twitterF} alt="logo de twitter" src={Twitter}/>
            </figure>
            <figure>
                <img className="img-responsive" onMouseEnter={pinterestF} onMouseLeave={pinterestF} alt="logo de pinterest" src={Pinterest}/>
            </figure>
            <figure>
                <img className="img-responsive" onMouseEnter={instagramF} onMouseLeave={instagramF} alt="logo de instagram" src={Instagram}/>
            </figure>
        </div>
    </footer>
}

export default Footer;