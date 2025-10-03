const MyMain = () => {
    return (
        <div className="main">
            <form className="blog-form">
                <div className="input-container">

                    <div className="blogTitolo">
                        <p>Titolo</p>
                        <input
                            className="titoloBlog"
                            name="title"
                            value=""
                            type="text" />
                    </div>


                    <div className="scrittoreBlog">
                        <p>Autore</p>
                        <input
                            className="utentePost"
                            name="author"
                            value=""
                            type="text" />
                    </div>

                    <div className="contenuto">
                        <p>Contenuto</p>
                        <input
                            className="content"
                            name="body"
                            value=""
                            type="text" />
                    </div>

                    <div className="checkbox">
                        <p>Rendi Post Pubblico</p>
                        <input
                            className="pubblico"
                            name="public"
                            value="false"
                            type="checkbox" />
                    </div>
                </div>

                <button className="send">Posta</button>
            </form>
        </div>
    )
}

export default MyMain