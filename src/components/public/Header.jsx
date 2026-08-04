import { Link } from "react-router-dom"

const Header = () => {
    // Liens qui s'affiche sur l'interface
    const titre = "MarchéBio"
    const homeLink = "Accueil"
    const produitsLink = "Produits"
    const servicesLink = "Services"
    const blogLink = "Blog"
    const connexionLink = "Connexion"

    // Liens utilisés par le routeur
    const homeLinkNav = "/home"
    const produitsLinkNav = "/produits"
    const servicesLinkNav = "/services"
    const blogLinkNav = "/blog"
    const connexionLinkNav = "/auth/login"

    return (
        <header>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={homeLinkNav}>{homeLink}</Link></li>
                            <li><Link to={produitsLinkNav}>{produitsLink}</Link></li>
                            <li><Link to={servicesLinkNav}>{servicesLink}</Link></li>
                            <li><Link to={blogLinkNav}>{blogLink}</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">{titre}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={homeLinkNav}>{homeLink}</Link></li>
                        <li><Link to={produitsLinkNav}>{produitsLink}</Link></li>
                        <li><Link to={servicesLinkNav}>{servicesLink}</Link></li>
                        <li><Link to={blogLinkNav}>{blogLink}</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={connexionLinkNav}>
                        <a className="btn btn-primary text-white">{connexionLink}</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header