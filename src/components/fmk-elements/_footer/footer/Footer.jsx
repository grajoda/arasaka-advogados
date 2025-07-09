import "./footer.css"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-menu">
                <a>inicio</a>
                <a>Sobre Nós</a>
                <a>Serviços</a>
                <a>Perguntas</a>
                <a>Contato</a>
            </div>

            <div className="footer-contact-section">
                <h2>Contatos</h2>
                <p>Email: contato@arasaka.com</p>
                <p>WhatsApp: 11 11111-1111</p>
            </div>

            {/* <div className="footer-social-networks-section">
                <h2>Siga Minhas Redes</h2>
                <a><i className="fa-brands fa-linkedin"></i></a>
                <a><i className="fa-brands fa-youtube"></i></a>
            </div> */}
        </div>
    )
}