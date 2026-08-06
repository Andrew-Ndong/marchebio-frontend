// src/layouts/DashboardLayout.jsx
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const { getItemCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Menu selon le rôle
    const getMenuItems = () => {
        const items = [];

        if (user?.role === 'PRODUCTEUR') {
            items.push(
                { label: '📦 Mes produits', path: '/producteur/produits' },
                { label: '📋 Commandes reçues', path: '/producteur/commandes' }
            );
        }

        if (user?.role === 'ACHETEUR') {
            items.push(
                { label: '🛒 Panier', path: '/acheteur/panier', badge: getItemCount() },
                { label: '📋 Mes commandes', path: '/acheteur/commandes' }
            );
        }

        if (user?.role === 'ADMIN') {
            items.push(
                { label: '📊 Dashboard', path: '/admin/dashboard' },
                { label: '👥 Utilisateurs', path: '/admin/users' },
                { label: '📦 Commandes', path: '/admin/commandes' }
            );
        }

        return items;
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* Contenu principal */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-100 shadow-sm px-4">
                    <div className="flex-1">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <Link to="/" className="btn btn-ghost text-xl">🌿 MarchéBio</Link>
                    </div>
                    <div className="flex items-center gap-3">
            <span className="text-sm hidden sm:inline">
              👋 {user?.userName} ({user?.role})
            </span>
                        <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                            Déconnexion
                        </button>
                    </div>
                </div>

                {/* Page content */}
                <div className="p-4 flex-1">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li className="menu-title">
                        <span>📋 Menu</span>
                    </li>
                    {getMenuItems().map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className="flex justify-between">
                                <span>{item.label}</span>
                                {item.badge > 0 && (
                                    <span className="badge badge-primary badge-sm">{item.badge}</span>
                                )}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-4">
                        <Link to="/" className="text-primary">🏠 Retour à l'accueil</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;