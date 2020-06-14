import React from 'react'

// Assets
import icon from '../static/images/illustration-working.svg'

function Description() {
    return <div className="container">
        <section className="description">
            <figure>
                <img alt="Logo de la imagen" title="ahorra tu trabajo" src={icon} />
            </figure>
            <div className="title">
                <h2>More than just shorter links</h2>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="btn-secondary">Get Started</button>
            </div>
        </section>
    </div> 
}

export default Description;