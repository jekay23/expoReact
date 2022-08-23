import React, {useEffect, useState} from 'react';
import Link, {LinkProps} from './link';
import {useAppSelector} from '../Redux/hooks';
import {NavbarLinks} from '../Redux/currentNavbarLink';

export interface HeaderLinkProps extends LinkProps {
    extraPadding?: string;
    codename?: NavbarLinks;
}

type HeaderLinkExtraClass = 'active' | '';

export default function HeaderLink(props: HeaderLinkProps) {
    const [extraClass, setExtraClass] = useState<HeaderLinkExtraClass>('');

    const currentNavbarLink = useAppSelector(state => state.currentNavbarLink);

    useEffect(() => {
        if (props.codename == currentNavbarLink.link) {
            setExtraClass('active');
        } else if ('' != extraClass){
            setExtraClass('');
        }
    }, [currentNavbarLink]);

    return (
        <li className={"nav-item px-xl-5 " + (props.extraPadding || "")}>
            <Link extraClass={"nav-link " + extraClass} href={props.href}
                  name={props.name} style={(props.style || "")}/>
        </li>
    );
}