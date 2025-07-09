import "./ButtonLinksMenu.css"

export default function ButtonLinksMenu() {
    return(
        <div className="cta-see-more-section">
            <h1>Veja Também</h1>
            <div className="see-more-buttons">
                <p>Acompanhe meu trabalho no youtube</p>
                <a id="go-to-youtube-button" className="cta-action-button">Youtube</a>
                <p>Saiba mais sobre minha expreriência profissional </p>
                <a id="go-to-linkedin-button" className="cta-action-button">Linkedin</a>
                
                <a href="/docs/Pedro-Grajeda-Desenvolvedor.pdf" download>
                    <p id="download-cv-button" className="cta-action-button">Baixar CV</p>
                </a>
            </div>
        </div>
    )
}