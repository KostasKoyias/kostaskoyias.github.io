import { interests, picture } from './config.js'
import { e } from '../utils.js'

function Intro(props){

    return (e("div", {id: "intro", className: "card"}, 
                e("img", {src: picture, alt: "my-pic"}), 
                e("div", {className: "card-body"},
                    e("h5", {className: "card-title"}, "About myself"), 
                    e("div", {className: "card-text"}, 
                        e("div", {id: "personal-info"}, 
                              "My name is Konstantinos Koyias. I was born in 1997 & I am currently working"  
                            + " towards a computer science bachelor's degree at ", 
                            e("a", {href: "http://www.di.uoa.gr/eng", target: "blank"}, "DiT, UoA"), "."),
                        e("div", {id: "specialty"}, "My concentration is on Data & Knowledge management and Software.", 
                            e("br"), "I am mostly interested in"),
                            e("ul", {id: "passion"}, 
                                interests.map((inst, i) => e("li", {key: i}, inst))),
                        "I have also worked on Web Development for a while."
                    )
                )
            ))
}

export default Intro