import AccountLink from "./account_link/AccountLink";
import {addKey} from "../../utils";

function LinksColumn({pos, header, links}) {
    const accountLinks = links.map(AccountLink).map(addKey);

    return (
        <div className={pos}>
            <h3 className="h-beautify">{header}</h3>
            <ul>{accountLinks}</ul>
        </div>
    )
}

export default LinksColumn