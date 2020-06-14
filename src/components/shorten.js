import React from 'react'

function Shorten() {

    function formUrl(e) {
        e.preventDefault()
    }

    function validUrl(e) {
        console.log(e.currentTarget())
    }

    return <section className="shorten">
            <form className="form" onSubmit={formUrl}>
                <input placeholder="shorten a link here" type="url" name="shorten" required />
                <button className="btn-secondary default" onChange={validUrl} type="submit">Shorten It!</button>
            </form>
            <div className="all-url">
                <div className="response"><p>https://frontendmentor.io</p></div>
                <div className="url">
                    <p>https://rel.ink/k4lKyk</p>
                    <button className="btn-secondary medium">Copy</button>
                </div>
            </div>
            <div className="all-url">
                <div className="response"><p>https://frontendmentor.io</p></div>
                <div className="url">
                    <p>https://rel.ink/k4lKyk</p>
                    <button className="btn-secondary medium">Copy</button>
                </div>
            </div>
            <div className="all-url">
                <div className="response"><p>https://frontendmentor.io</p></div>
                <div className="url">
                    <p>https://rel.ink/k4lKyk</p>
                    <button className="btn-secondary medium">Copy</button>
                </div>
            </div>
        </section>
}

export default Shorten;