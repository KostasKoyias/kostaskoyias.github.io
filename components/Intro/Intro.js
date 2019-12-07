import { interests, picture, birthday } from './config.js'
import { e, getAge } from '../utils.js'

function Intro(props){

    return (e("div", {id: "intro", className: "card"}, 
                e("img", {src: picture, alt: "my-pic"}), 
                e("div", {className: "card-body"},
                    e("h5", {className: "card-title"}, "About myself"), 
                    e("div", {className: "card-text"}, 
                        e("div", {id: "personal-info"}, 
                              "My name is Konstantinos Koyias & I am " + getAge(birthday) + " years old.", e("br"),
                               "I am currently working"  
                            + " towards a B.Sc in Informatics and Telecommunications at ", 
                            e("a", {href: "http://www.di.uoa.gr/eng", target: "_blank"}, "DiT, UoA"), "."),
                        e("div", {id: "specialty"}, 
                            "My concentration is on Data & Knowledge Management and Software Engineering.", 
                            e("br"), "I am mostly interested in"),
                            e("ul", {id: "passion"}, 
                                interests.map((inst, i) => e("li", {key: i}, inst))),
                        "I have also worked on Web Development for a while."
                    )
                )
            ))
}

export default Intro