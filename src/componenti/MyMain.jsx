import { useState } from "react"

const MyMain = () => {
    const URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
    const [dati, setDati] = useState({
        title: "",
        author: "",
        body: "",
        public: false
    });

    const GestisciInvioDati = (e) => {
        e.preventDefault();

        const datiDaInviare = {
            title: dati.title,
            author: dati.author,
            body: dati.body,
            public: dati.public
        };

        console.log("Dati Inviati:", datiDaInviare);

        fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datiDaInviare),
        })


            .then((risposta) => risposta.json())
            .then((risultato) => {
                alert("Post Bloggato" + JSON.stringify(risultato));

                setDati({
                    title: "",
                    author: "",
                    body: "",
                    public: false,
                });
            })
    }

    const gestisciCambiamenti = (e) => {
        const { name, value, type, checked } = e.target;

        const nuovoValore = type === "checkbox" ? checked : value

        setDati((nuoviDati) => ({
            ...nuoviDati,
            [name]: nuovoValore,
        }));
    }

    return (
        <div className="main">
            <form className="blog-form" onSubmit={GestisciInvioDati}>
                <div className="input-container">

                    <div className="blogTitolo">
                        <p>Titolo</p>
                        <input
                            className="titoloBlog"
                            name="title"
                            value={dati.title}
                            onChange={gestisciCambiamenti}
                            type="text" />

                    </div>


                    <div className="scrittoreBlog">
                        <p>Autore</p>
                        <input
                            className="utentePost"
                            name="author"
                            value={dati.author}
                            onChange={gestisciCambiamenti}
                            type="text" />
                    </div>

                    <div className="contenuto">
                        <p>Contenuto</p>
                        <textarea
                            className="content"
                            name="body"
                            value={dati.body}
                            onChange={gestisciCambiamenti}
                        />
                    </div>

                    <div className="checkbox">
                        <p>Rendi Post Pubblico</p>
                        <input
                            className="pubblico"
                            name="public"
                            checked={dati.public}
                            onChange={gestisciCambiamenti}
                            type="checkbox" />
                    </div>
                </div>

                <button
                    className="send"
                    type="submit" >
                    Posta
                </button>
            </form>
        </div>
    )
}

export default MyMain