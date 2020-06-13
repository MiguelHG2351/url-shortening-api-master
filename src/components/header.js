import React, { Fragment } from 'react'
import Menu from './menu'

function Header(props) {
    return <Fragment>
        <Menu />
        {props.children}
    </Fragment>
}

export default Header;