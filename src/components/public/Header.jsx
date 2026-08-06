// src/components/public/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const { getItemCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Menu public (visible par tout le monde)
    const publicLinks = [
        { label: "Accueil", path: "/" },
        { label: "Produits", path: "/produits" },
        { label: "Équipe", path: "/equipe" },
        { label: "À propos", path: "/a-propos" },
        { label: "Contact", path: "/contact" },
    ];

    // Menu selon le rôle (visible quand connecté)
    const getRoleLinks = () => {
        if (!isAuthenticated) return [];

        if (user?.role === 'PRODUCTEUR') {
            return [
                { label: "📦 Mes produits", path: "/producteur/produits" },
                { label: "📋 Commandes reçues", path: "/producteur/commandes" },
            ];
        }

        if (user?.role === 'ACHETEUR') {
            return [
                { label: "🛒 Mon panier", path: "/acheteur/panier" },
                { label: "📋 Mes commandes", path: "/acheteur/commandes" },
            ];
        }

        if (user?.role === 'ADMIN') {
            return [
                { label: "📊 Dashboard", path: "/admin/dashboard" },
                { label: "👥 Utilisateurs", path: "/admin/users" },
                { label: "📦 Commandes", path: "/admin/commandes" },
            ];
        }

        return [];
    };

    return (
        <header>
            <div className="navbar bg-base-100 shadow-sm px-4 fixed top-0 z-50">
                <div className="navbar-start">
                    {/* Menu mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {/* Liens publics */}
                            {publicLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}

                            {/* Séparateur si connecté */}
                            {isAuthenticated && <div className="divider my-1"></div>}

                            {/* Liens selon le rôle */}
                            {getRoleLinks().map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="btn btn-ghost text-xl">
                        🌿 MarchéBio
                    </Link>
                </div>

                {/* Menu desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {publicLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}

                        {/* Liens selon le rôle (desktop) */}
                        {getRoleLinks().map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Partie droite */}
                <div className="navbar-end gap-2">
                    {/* Panier - visible même non connecté */}
                    <Link to="/acheteur/panier" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">{getItemCount()}</span>
                        </div>
                    </Link>

                    {/* Connexion / Déconnexion */}
                    {isAuthenticated ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                                    <span className="text-sm font-bold">{user?.userName?.[0]}</span>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                                <li className="menu-title">
                                    <span>{user?.userName}</span>
                                </li>
                                <li><span className="text-xs text-gray-500">{user?.email}</span></li>
                                <li><span className="text-xs text-gray-500">👤 {user?.role}</span></li>
                                <div className="divider my-1"></div>
                                <li onClick={handleLogout}>
                                    <a className="text-error">🚪 Déconnexion</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/login" className="btn btn-ghost btn-sm">
                                Connexion
                            </Link>
                            <Link to="/register" className="btn btn-primary btn-sm">
                                S'inscrire
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            {/* Espace pour le header fixe */}
            <div className="h-16"></div>
        </header>
    );
};

export default Header;