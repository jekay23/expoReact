import React from 'react';

export interface LinkProps {
    href: string;
    name: string;
    extraClass?: string;
    style?: string;
}

export default function Link(props: LinkProps) {
    let nameElement = <>{props.name}</>;
    if ('undefined' !== typeof props.style) {
        switch (props.style) {
            case 'strong':
                nameElement = <strong>{props.name}</strong>;
                break;
            case 'button':
                nameElement = <button className={'mmd-button'} type={'button'}>{props.name}</button>;
                break;
        }
    }
    return (
        <a className={props.extraClass} href={props.href}>{nameElement}</a>
    );
}