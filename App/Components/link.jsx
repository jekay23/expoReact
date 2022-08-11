import React from 'react';

export default function Link(props) {
    let name = props.name;
    if ('undefined' !== typeof props.style) {
        switch (props.style) {
            case 'strong':
                name = <strong>{name}</strong>;
                break;
            case 'button':
                name = <button className={'mmd-button'} type={'button'}>{name}</button>;
                break;
        }
    }
    return (
        <a className={props.extraClass} href={props.href}>{name}</a>
    );
}