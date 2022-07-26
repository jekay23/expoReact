import React from 'react';
import Link from './link.jsx';

export default function HeaderLink(props) {
    return (
        <li className={"nav-item px-xl-5 " + (props.extraPadding || "")}>
            <Link extraClass={"nav-link " + (props.extraClass || "")} href={props.href}
                  name={props.name} style={(props.style || "")}/>
        </li>
    );
}