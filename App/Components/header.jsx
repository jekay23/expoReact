import React from 'react';
import HeaderLink from './headerLink.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary mmd-navbar" role="navigation">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand px-lg-5" href="/admin">
                                <strong>Администрирование</strong>
                            </a>
                            <ul className="navbar-nav">
                                <HeaderLink name={"Подборки"} href={"/admin/compilations"} class={"active"} />
                                <HeaderLink name={"Профили"} href={"/admin/profiles"} />
                                <HeaderLink name={"Фото"} href={"/admin/photos"} extraPadding={"pe-5"} />
                                <HeaderLink name={"Вернуться на основной сайт"} href={"/"} style={"strong"}/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}