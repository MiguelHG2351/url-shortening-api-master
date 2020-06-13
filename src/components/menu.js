import React, { useState } from 'react'

function Header() {

    let [active, setActive] = useState("slider");

    function toggleMenu() {
        // console.log("hola mundo");
        if (active === 'slider') {
            setActive('slider active')
        } else {
            setActive('slider')
        }
    }

    return <header className="header-site">
        <div className="header-title">
            <h1>Shortly</h1>
        </div>
        <div className="header-nav">
            <button onClick={toggleMenu} className="menu">
                <i className="material-icons">menu</i>
            </button>
            <div className={active}>
                <ul className="list-nav">
                    <li className="list-nav-element">Features</li>
                    <li className="list-nav-element">Pricing</li>
                    <li className="list-nav-element">Resources</li>
                </ul>
                <div className="line"></div>
                <div className="login">
                    <button className="btn-primary">Login</button>
                    <button className="btn-secondary">Sing up</button>
                </div>
            </div>
        </div>
    </header>
}

export default Header;