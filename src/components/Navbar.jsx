import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNavbar = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            {/* <div className="navbar__title">Anthony</div> */}
            <a href={`navbar__hamburger ${navActive ? "active" : ""}`} onClick={toggleNavbar}>
                <span className="navbar__hamburger-line"></span>
                <span className="navbar__hamburger-line"></span>
                <span className="navbar__hamburger-line"></span>
            </a>
            <div className={`navbar__items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <a href="#hero" onClick={closeMenu} activeClass="navbar__active-content" className="navbar__content">
                            01. Home
                        </a>
                    </li>
                    <li>
                        <a href="#project" onClick={closeMenu} activeClass="navbar__active-content" className="navbar__content">
                            02. Projets
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={closeMenu} activeClass="navbar__active-content" className="navbar__content">
                            03. A Propos
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu} activeClass="navbar__active-content" className="navbar__content">
                            04. Contact
                        </a>
                    </li>
                </ul>

                {/* <NavLink className="btn btn-outline-primary">Contactez-me</NavLink> */}
            </div>
        </nav>
    );
};
export default Navbar;
