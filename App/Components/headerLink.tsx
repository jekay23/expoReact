import React from 'react';
import Link, {LinkProps} from './link';

export interface HeaderLinkProps extends LinkProps {
    extraPadding?: string
}

export default function HeaderLink(props: HeaderLinkProps) {
    return (
        <li className={"nav-item px-xl-5 " + (props.extraPadding || "")}>
            <Link extraClass={"nav-link " + (props.extraClass || "")} href={props.href}
                  name={props.name} style={(props.style || "")}/>
        </li>
    );
}