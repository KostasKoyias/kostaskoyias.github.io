import { addKey, itemToAnchorList } from './methods.js'

const e = React.createElement

const url = {
    mail: e("span", null, "konstantinos.kogias97", e("i", { className: "fas fa-at" }), "gmail.com"),
    phone: "+30 6970307088", github: "https://github.com/KostasKoyias",
    linkedIn: "https://www.linkedin.com/in/konstantinos-koyias-687269175/", fb: "https://www.facebook.com/kostaskoyias",
    uTube: "https://www.youtube.com/channel/UC-Bg1WdBrEKL4B9TIjh7QZw?app=desktop",
    instagram: "https://www.instagram.com/kostas_koyias/?hl=en",
    cv: "/docs/CV.pdf"
}

const messages = ["Make sure to check out my GitHub account where all  my projects reside.",
    "If basketball is your passion, do not forget to visit my youtube channel as well.",
    "For any work-related offers or issues, one can contact me via e-mail, phone or facebook"]


// represent a column as an object defining it's position & content
const cols = [
    {
        pos: "col-md-6",
        children: [
            e("h3", { className: "h-beautify" }, "More info"),
            e("p", null, "Use those links to check out all my web-accounts!"),
            e("ul", null, messages.map((m, i) => e("li", { key: i }, m)))
        ].map(addKey)
    },
    {
        pos: "col-md-3 offset-md-1",
        children: [
            // header
            e("h3", { className: "h-beautify" }, "Work"),

            // links
            e("ul", null,
                [
                    { icon: "fab fa-github-square", msg: "github", props: { href: url.github, target: "_blank" } },
                    { icon: "fab fa-linkedin", msg: "linkedIn", props: { href: url.linkedIn, target: "_blank" } },
                    { icon: "fas fa-envelope", msg: url.mail, props: { href: "#footer", className: "dead-anchor" } },
                    { icon: "fas fa-file-alt", msg: " Resume", props: { href: url.cv, target: "_blank" } }
                ].map(itemToAnchorList)
            )
        ].map(addKey)
    },
    {
        pos: "col-md-2",
        children: [
            // header
            e("h3", { className: "h-beautify" }, "Personal"),

            // links
            e("ul", null,
                [
                    { icon: "fab fa-facebook", msg: "facebook", props: { href: url.fb, target: "_blank" } },
                    { icon: "fab fa-youtube-square", msg: "youtube", props: { href: url.uTube, target: "_blank" } },
                    { icon: "fas fa-phone-square", msg: url.phone, props: { href: "#footer", className: "dead-anchor" } },
                    { icon: "fab fa-instagram", msg: "instagram", props: { href: url.instagram, target: "_blank" } }
                ].map(itemToAnchorList)
            )
        ].map(addKey)
    }
]

export { cols }
