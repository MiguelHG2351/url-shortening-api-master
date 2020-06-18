import React, { useState } from 'react'

function Header() {

    let [active, setActive] = useState("slider inActive");

    function toggleMenu() {
        // console.log("hola mundo");
        if (active === 'slider inActive') {
            setActive('slider active');
        } else if(active === 'slider active') {
            setActive('slider inActive');
        }
    }

    return <div className="container">
        <header className="header-site">
                <div className="header-title">
                    <h1>Shortly</h1>
                </div>
                <div className="header-nav">
                    <button onClick={toggleMenu} className="menu">
                        <i className="material-icons">menu</i>
                    </button>
                    <div className={active}>
                        <ul className="list-nav">
                            <li className="list-nav-element"><a href="https://github.com">Features</a></li>
                            <li className="list-nav-element"><a href="https://github.com/">Pricing</a></li>
                            <li className="list-nav-element"><a href="https://github.com">Resources</a></li>
                        </ul>
                        <div className="line"></div>
                        <div className="login">
                            <button className="btn-primary">Login</button>
                            <button className="btn-secondary">Sing up</button>
                        </div>
                    </div>
                </div>
        </header>
    </div> 
}

export default Header;