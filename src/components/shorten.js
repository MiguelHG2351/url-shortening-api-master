import React, { useState } from 'react'

function Shorten() {

    const [url, setUrl] = useState(null)

    function formUrl(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(e.currentTarget);
        const BASE_URL = `https://rel.ink/api/links/`
        fetch(BASE_URL, {
            method: 'POST',
            body: formData
        })
        .then(data => {
            return data.json()
        })
        .then(data => {
            setUrl([`https://rel.ink/${data.hashid}`, data.url])
            console.log(data)
            console.log(data.hashid)
            console.log(url)
        })
    }

    function copyUrl(e) {
        
    }

    return <section className="shorten">
            <form className="form" onSubmit={formUrl}>
                <input placeholder="shorten a link here" type="url" name="url" required />
                <button className="btn-secondary medium" type="submit">Shorten It!</button>
            </form>
            {url ?
                <div className="all-url" key>
                    <div className="response"><p>{url[1]}</p></div>
                    <div className="url">
                        <a href={url[0]} target="__blank" >{url[0]}</a>
                        <button className="btn-secondary medium" onClick={copyUrl}>Copy</button>
                    </div>
                </div>
                : console.log("No hay nada:(")
            }
        </section>
}

export default Shorten;