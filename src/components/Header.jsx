const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="navbar__title">Anthony.</div>
                    <div className="navbar__right">
                        <ul className="navbar__list">
                            <li className="navbar__items">
                                <a className="navbar__items--link" href="#about">
                                    <span className="navbar__items--number color-primary">01.</span> A propos
                                </a>
                            </li>
                            <li className="navbar__items">
                                <a className="navbar__items--link" href="#skills">
                                    <span className="navbar__items--number color-secondary">02.</span> Compétences
                                </a>
                            </li>
                            <li className="navbar__items">
                                <a className="navbar__items--link" href="#project">
                                    <span className="navbar__items--number color-secondary">03.</span> Projets
                                </a>
                            </li>
                            <li className="navbar__items">
                                <a className="navbar__items--link" href="#contact">
                                    <span className="navbar__items--number color-secondary">04.</span> Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
