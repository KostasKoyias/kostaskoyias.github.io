import {createIcon} from "../../../utils";

function AccountLink({icon, label, anchor}) {
    const {className, ...rest} = anchor
    return (
        <li className="nav-item">
            <a className={className || "nav-link"} {...rest}>
                {createIcon(icon, {size: "lg"})}
                {label}
            </a>
        </li>
    )
}

export default AccountLink