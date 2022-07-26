import React from 'react';
import Link from './link.jsx';

export default class HeaderLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={"nav-item px-xl-5 " + (this.props.extraPadding || "")}>
                <Link extraClass={"nav-link " + (this.props.extraClass || "")} href={this.props.href}
                      name={this.props.name} style={(this.props.style || "")} />
            </li>
        );
    }
}