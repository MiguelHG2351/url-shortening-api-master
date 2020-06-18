import React from 'react'

// Assets
import brand from '../static/images/icon-brand-recognition.svg'
import detailed from '../static/images/icon-detailed-records.svg'
import fully from '../static/images/icon-fully-customizable.svg'

function Products() {
    return <section className="product-info">
        <div className="product-title">
            <h2>Advanced Statistics</h2>
            <p>Track your your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <article className="card ">
            <figure className="card-image">
                <img src={brand} alt="Tenemos una gran marca en el mercado" />
            </figure>
            <div className="card-content">
                <h2>Brand Recognition</h2>
                <p>Boost your brand recognition with each click. Genric links don't
            mean a thing. Branded links help instil confident in your content.</p>
            </div>
        </article>
        <article className="card card-line">
            <figure className="card-image">
                <img src={detailed} alt="Tenemos una gran marca en el mercado" />
            </figure>
            <div className="card-content">
                <h2>Detailed Records</h2>
                <p>Grain insights into who is clicking your links. Knowing when and
            where people engage with your content hekos inform better decisions.</p>
            </div>
        </article>
        <article className="card card-line">
            <figure className="card-image">
                <img src={fully} alt="Tenemos una gran marca en el mercado" />
            </figure>
            <div className="card-content">
                <h2>Fully Customizable</h2>
                <p>mprove brand awareness and content discoveability through
            customizable links, supercharging audience engagement.</p>
            </div>
        </article>
    </section>
}

export default Products;