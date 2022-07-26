import React from 'react';

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name = this.props.name;
        if ('undefined' !== typeof this.props.style) {
            switch (this.props.style) {
                case 'strong':
                    name = <strong>{name}</strong>;
            }
        }
        return (
            <a className={this.props.extraClass} href={this.props.href}>{name}</a>
        );
    }
}