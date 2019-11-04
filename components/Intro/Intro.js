import { interests, picture } from './config.js'

function Intro(props){

    return (
        React.createElement("div", {id: "intro", className: "card"}, 
            React.createElement("img", {src: picture, alt: "my-pic"}), 
            React.createElement("div", {className: "card-body"},
                React.createElement("h5", {className: "card-title"}, "About myself"), 
                React.createElement("div", {className: "card-text"}, 
                    React.createElement("div", {id: "personal-info"}, 
                        "My name is Konstantinos Koyias. I was born in 1997 & I am a bachelor computer"  
                      + " science student at the ", 
                        React.createElement("a", {href: "http://www.di.uoa.gr/eng", target: "blank"}, "DiT, UoA"), "."),
                    React.createElement("div", {id: "specialty"}, 
                    "My concentration is on Data & Knowledge management and Software.", 
                    React.createElement("br"), "I am mostly interested in"),
                    React.createElement("ul", {id: "passion"}, 
                        interests.map((inst, i) => React.createElement("li", {key: i}, inst))),
                    "I have also worked on Web Development for a while."
                )
            )
        ))
}

export default Intro