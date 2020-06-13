import React from 'react'

// Assets
import icon from '../static/images/illustration-working.svg'

function Description() {
    return <section className="description">
        <figure>
            <img alt="Logo de la imagen" title="ahorra tu trabajo" src={icon} />
        </figure>
            <h1>Hola Mundo</h1>
    </section>
}

export default Description;