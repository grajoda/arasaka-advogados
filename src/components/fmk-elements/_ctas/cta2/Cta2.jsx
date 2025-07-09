import ButtonLinksMenu from "../_actions/buttonLinksMenu/buttonLinksMenu"
import Form1 from "../_actions/form-1/form1"
import Form2 from "../_actions/form-2/form2"
import Contact1 from "../_texts/contact-1/contact1"
import "./cta2.css"

export default function Cta2(){
    return(
        <div className="cta-2" id="contact">
            <img className="cta-2-img" src="/images/arasaka-case.png"/>
            <CtaContent/>
        </div>
    )
}

function CtaContent() {
    return(
        <div className="cta-2-content">
            <CtaText content={<Contact1/>}/>
            <div className="cta-2-vertical-divisory"><p>.</p></div>
            <CtaActionSection action={<Form2/>}/>
        </div>
    )
}


function CtaText({content}) {
    return(
        <div className="cta-2-text-section">
            {content}
        </div>
    )
}


function CtaActionSection({action}) {
    return(
        <div className="cta-2-action-section">
            {action}
        </div>
    )
}