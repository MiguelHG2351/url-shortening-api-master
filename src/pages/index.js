import React, { Component, Fragment } from 'react';

// Component
import Description from '../components/description'
import Shorten from '../components/shorten'
import Products from '../components/product'
import Links from '../components/link'
import Footer from '../components/footer'

class Index extends Component {
    render() {
        return <Fragment>
            <Description />
            <Shorten />
            <Products />
            <Links />
            <Footer />
        </Fragment>
    }
}

export default Index;