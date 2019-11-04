import { addKey, itemToAnchorList} from './methods.js'

const url = {
    mail: "sdi1500071@di.uoa.gr", phone: "+30 6970307088", github: "https://github.com/KostasKoyias",
    linkedIn: "https://www.linkedin.com/in/kostas-koyias-687269175/", fb: "https://www.facebook.com/kostaskoyias",
    uTube: "https://www.youtube.com/channel/UC-Bg1WdBrEKL4B9TIjh7QZw?app=desktop",
    instagram: "https://www.instagram.com/kostas_koyias/?hl=en", 
    cv: "https://www.dropbox.com/s/qjj0sm8xo0c307q/Software_Engineer.pdf?dl=0"
}

const messages = ["Make sure to check out my GitHub account where all  my projects reside.",
                  "If basketball is your passion, do not forget to visit my youtube channel as well.",
                  "For any work-related offers or issues, one can contact me via e-mail, phone or facebook"]

const cols = [
    {
        pos: "col-md-6",
        children: [
            React.createElement("h3", null, "More info"), 
            React.createElement("p", null, "Use those links to check out all my web-accounts!"),
            React.createElement("ul", null, messages.map((m , i) => React.createElement("li", {key: i}, m)))
        ].map(addKey)
    },
    {
        pos: "col-md-2 offset-md-2",
        children: [React.createElement("h3", null, "Work"),

            // links
            React.createElement("ul", null,  
                [
                    {icon: "fab fa-github-square", msg: "github", props: {href: url.github, target: "blank"}},
                    {icon: "fab fa-linkedin", msg: "linkedIn", props: {href: url.linkedIn, target: "blank"}},
                    {icon: "fas fa-envelope", msg: url.mail, props: {href: "mailto:" + url.mail}},
                    {icon: "fab fa-dropbox", msg: "Resume", props: {href: url.cv, target: "blank"}},
                ].map(itemToAnchorList)
            )
        ].map(addKey)
    },
    {
        pos: "col-md-2",
        children: [React.createElement("h3", null, "Personal"),

            // links
            React.createElement("ul", null,  
                [
                    {icon: "fab fa-facebook", msg: "facebook", props: {href: url.fb, target: "blank"}},
                    {icon: "fab fa-youtube-square", msg: "youtube", props: {href: url.uTube, target: "blank"}},
                    {icon: "fas fa-phone-square", msg: url.phone, props : {href: ""}},
                    {icon: "fab fa-instagram", msg: "instagram", props: {href: url.instagram, target: "blank"}}
                ].map(itemToAnchorList)
            )
        ].map(addKey)
    }
]

export { cols }