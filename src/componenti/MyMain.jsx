import { useState } from "react"

const MyMain = () => {

    const [dati, setDati] = useState({
        title:"",
        author:"",
        body:"",
        public:false
    });

    const gestisciCambiamenti = (e) =>{
        const {name, value, type, checked} = e.target;
        let nuovoValore;

        if(type === "checkbox") {
            nuovoValore = checked;
        } else{
            nuovoValore = value;
        }

        setDati((nuoviDati) => ({
            ...nuoviDati,
            [name] : nuovoValore,
        }));
    }

    return (
        <div className="main">
            <form className="blog-form">
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
                            type="text" />
                    </div>

                    <div className="checkbox">
                        <p>Rendi Post Pubblico</p>
                        <input
                            className="pubblico"
                            name="public"
                            value={dati.public}
                            onChange={gestisciCambiamenti}
                            type="checkbox" />
                    </div>
                </div>

                <button className="send">Posta</button>
            </form>
        </div>
    )
}

export default MyMain