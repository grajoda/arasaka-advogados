import "./headerContact.css"


export default function HeaderContact({type}) {
    return(
        <div className="header-contact">
            {(type == "social-network" || type == "both") ? <SocialNetworksLinks/> : ""}
            {(type == "button" || type == "both") ? <ActionButton/> : ""}
            {(type == "email" || type == "both") ? <WhatsAppAndEmail/> : ""}
        </div>
    )
}


function WhatsAppAndEmail() {
    return(
        <div className="wpp-and-email">
            <div className="wpp-email-text-field">
                <i class="fa-solid fa-envelope"></i>
                <p> contato@arasaka.com</p>
            </div>

            <div className="wpp-email-text-field">
                <i class="fa-brands fa-whatsapp"></i>
                <p>11 11111-1111</p>
            </div>
        </div>
    )
}


function SocialNetworksLinks() {
    return(
        <div className="social-network-links">
            <a><i class="fa-brands fa-linkedin"></i></a>
            <a><i class="fa-brands fa-instagram"></i></a>
            <a><i class="fa-brands fa-facebook"></i></a>
            <a><i class="fa-brands fa-whatsapp"></i></a>
        </div>
    )
}


function ActionButton(){
    return(
        <div className="action-button-box">
            <a className="action-button">Redirecionar</a>
        </div>
    )
}