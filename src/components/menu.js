import React, { useState } from 'react'

function Header() {

    let [active, setActive] = useState("closeMenu");
    let [display, setDisplay] = useState("none");

    function toggleMenu() {
        // console.log("hola mundo");
        if (active === 'closeMenu') {
            setActive('openMenu')
            setDisplay('block');
        } else {
            setActive('closeMenu')
            // setDisplay('none');
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
                    <div style={{animation: `${active} .3s ease forwards`, display: `${display}`}} className="slider">
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
    </div> 
}

export default Header;