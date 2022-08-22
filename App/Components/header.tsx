import React from 'react';
import HeaderLink, {HeaderLinkProps} from './headerLink';
import Link from './link';

export default function Header() {
    const headerLinks: HeaderLinkProps[] = [
        {name: 'Подборки', href: '/admin/compilations', codename: 'compilations'},
        {name: 'Профили', href: '/admin/profiles', codename: 'profiles'},
        {name: 'Фото', href: '/admin/photos', codename: 'photos', extraPadding: 'pe-5'},
        {name: 'Вернуться на основной сайт', href: '/', codename: 'goBack', style: 'strong'}
    ];

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
                        <Link extraClass={"navbar-brand px-lg-5"} href={"/admin"} name={"Администрирование"}
                              style={"strong"}/>
                        <ul className="navbar-nav">
                            {headerLinks.map((headerLink, key) => (
                                <HeaderLink name={headerLink.name} href={headerLink.href} codename={headerLink.codename}
                                            extraPadding={headerLink.extraPadding} style={headerLink.style} key={key} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}