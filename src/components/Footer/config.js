import { itemToAnchorList } from './methods'
import { addKey, createIcon } from "../utils";
import { faLinkedin, faFacebook, faInstagram, faYoutubeSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt, faPhoneSquare, faAt } from "@fortawesome/free-solid-svg-icons";

const url = {
    mail: <span>konstantinos.kogias97{createIcon(faAt)}gmail.com</span>,
    phone: "+30 6970307088", github: "https://github.com/KostasKoyias",
    linkedIn: "https://www.linkedin.com/in/kostas-koyias-687269175/", fb: "https://www.facebook.com/kostaskoyias",
    uTube: "https://www.youtube.com/channel/UC-Bg1WdBrEKL4B9TIjh7QZw?app=desktop",
    instagram: "https://www.instagram.com/kostas_koyias/?hl=en",
    cv: "docs/CV.pdf"
}

const messages = [
    "Make sure to check out my GitHub account where all  my projects reside",
    "If basketball is your passion, do not forget to visit my youtube channel as well",
    "For any work-related offers or issues, one can contact me via e-mail, phone or facebook"
]


// represent a column as an object defining it's position & content
const cols = [
    {
        pos: "col-md-6",
        children: [
            <h3 className="h-beautify">More Info</h3>,
            <p>Use those links to check out all my web-accounts!</p>,
            <ul>{messages.map((m, i) => <li key={i}>{m}</li>)}</ul>
        ].map(addKey)
    },
    {
        pos: "col-md-3 offset-md-1",
        children: [
            // header
            <h3 className="h-beautify">Work</h3>,

            // links
            <ul>{
                [
                    { icon: faGithubSquare, msg: "github", props: { href: url.github, target: "_blank" } },
                    { icon: faLinkedin, msg: "linkedIn", props: { href: url.linkedIn, target: "_blank" } },
                    { icon: faEnvelope, msg: url.mail, props: { href: "#footer", className: "dead-anchor" } },
                    { icon: faFileAlt, msg: " Resume", props: { href: url.cv, target: "_blank" } }
                ].map(itemToAnchorList)}
            </ul>
        ].map(addKey)
    },
    {
        pos: "col-md-2",
        children: [
            // header
            <h3 className="h-beautify">Personal</h3>,

            // links
            <ul>
                {[
                    { icon: faFacebook, msg: "facebook", props: { href: url.fb, target: "_blank" } },
                    { icon: faYoutubeSquare, msg: "youtube", props: { href: url.uTube, target: "_blank" } },
                    { icon: faPhoneSquare, msg: url.phone, props: { href: "#footer", className: "dead-anchor" } },
                    { icon: faInstagram, msg: "instagram", props: { href: url.instagram, target: "_blank" } }
                ].map(itemToAnchorList)}
            </ul>
        ].map(addKey)
    }
]

export { cols }
