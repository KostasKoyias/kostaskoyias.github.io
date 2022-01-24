import {addKey} from "../../utils";

const messages = [
    "Make sure to check out my GitHub account where all  my projects reside",
    "If basketball is your passion, do not forget to visit my youtube channel as well",
    "For any work-related offers or issues, one can contact me via e-mail, phone or facebook"
]

function MoreInfo() {
    return (
        <div className="col-md-6">
            <h3 className="h-beautify">More Info</h3>
            <p>Use those links to check out all my web-accounts!</p>
            <ul>{messages.map(m => <li>{m}</li>).map(addKey)}</ul>
        </div>
    )
}

export default MoreInfo