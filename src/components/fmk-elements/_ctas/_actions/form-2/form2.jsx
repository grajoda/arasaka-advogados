import "./form2.css"

export default function Form2 () {
    return(
        <div className="cta-form-2">
            <h2>form Name</h2>
            <div className="form-2-input-section">
                <div className="name-lastname-area">
                    <input id="name-input" type="text" placeholder="Nome"/>
                    <input id="last-name-input" type="text" placeholder="Sobrenome"/>
                </div>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Mensagem"/>
            </div>
        </div>
    )
}