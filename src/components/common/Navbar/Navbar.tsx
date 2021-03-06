import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-menu fixed-top bg-dark">
            <div className="navbar-menu-collapse">
                <ul className="navbar-menu-items">
                    <Link href="/">
                        <a className="navbar-logo navbar-item cs-logo animated delay-600ms fadeInUp">
                            CS
                        </a>
                    </Link>
                    <li className="navbar-item animated delay-600ms fadeInUp">
                        <a className="navbar-link disabled" href="#about-me">About</a>
                    </li>
                    <li className="navbar-item animated delay-800ms fadeInUp">
                        <a className="navbar-link disabled" href="#work-experience">Experience</a>
                    </li>
                    <li className="navbar-item animated delay-1s fadeInUp">
                        <a className="navbar-link disabled" href="#skills">Skills</a>
                    </li>
                    <li className="navbar-item animated delay-1dot2s fadeInUp">
                        <a className="navbar-link disabled" href="#works">Portfolio</a>
                    </li>
                    {/* <li className="navbar-item">
                        <a className="navbar-link disabled" href="{#}">Education</a>
                    </li> */}
                    <li className="navbar-item animated delay-1dot4s fadeInUp">
                        <a className="navbar-link disabled" href="#contact-me">Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
