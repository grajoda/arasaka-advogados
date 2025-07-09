import "./form1.css"

export default function Form1 () {
    return(
        <div className="cta-form-1">
            <h2>form Name</h2>
            <div className="form-1-input-section">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Email"/>
            </div>
        </div>
    )
}