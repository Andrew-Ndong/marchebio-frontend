// src/layouts/Layoutpublic.jsx
import Header from '../components/public/Header';
import { Outlet, Link } from 'react-router-dom';

const Layoutpublic = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <Header />
            <main className="min-h-screen bg-base-200 pt-16">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="footer bg-base-300 text-base-content p-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Section 1: Logo */}
                    <div>
                        <h3 className="text-xl font-bold">🌿 MarchéBio</h3>
                        <p className="text-sm opacity-70 mt-2">
                            Connecter les producteurs locaux aux consommateurs urbains
                        </p>
                    </div>

                    {/* Section 2: Liens rapides */}
                    <div>
                        <h6 className="footer-title">Navigation</h6>
                        <ul className="space-y-1">
                            <li><Link to="/" className="link link-hover">Accueil</Link></li>
                            <li><Link to="/produits" className="link link-hover">Produits</Link></li>
                            <li><Link to="/equipe" className="link link-hover">Équipe</Link></li>
                            <li><Link to="/a-propos" className="link link-hover">À propos</Link></li>
                        </ul>
                    </div>

                    {/* Section 3: Pour les utilisateurs */}
                    <div>
                        <h6 className="footer-title">Compte</h6>
                        <ul className="space-y-1">
                            <li><Link to="/login" className="link link-hover">Connexion</Link></li>
                            <li><Link to="/register" className="link link-hover">S'inscrire</Link></li>
                            <li><Link to="/acheteur/panier" className="link link-hover">Mon panier</Link></li>
                        </ul>
                    </div>

                    {/* Section 4: Contact */}
                    <div>
                        <h6 className="footer-title">Contact</h6>
                        <ul className="space-y-1 text-sm">
                            <li>📧 contact@marchebio.com</li>
                            <li>📞 +241 77 000 000</li>
                            <li>📍 Libreville, Gabon</li>
                        </ul>
                        <div className="flex gap-2 mt-4">
                            <a href="#" className="btn btn-ghost btn-sm btn-square">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                            <a href="#" className="btn btn-ghost btn-sm btn-square">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                            </a>
                            <a href="#" className="btn btn-ghost btn-sm btn-square">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.08 20.45H3.55V8.97h3.53v11.48zM5.31 7.4c-1.13 0-2.04-.92-2.04-2.05s.91-2.05 2.04-2.05 2.04.92 2.04 2.05-.91 2.05-2.04 2.05zm15.14 13.05h-3.53v-5.57c0-1.33-.48-2.24-1.68-2.24-.92 0-1.46.62-1.7 1.22-.09.22-.11.52-.11.83v5.76H11.9V8.97h3.39v1.54c.45-.69 1.25-1.67 3.04-1.67 2.22 0 3.89 1.45 3.89 4.57v6.04z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer bottom */}
            <div className="bg-base-300 border-t border-base-200">
                <div className="container mx-auto text-center py-4 text-sm opacity-60">
                    © {currentYear} MarchéBio - Tous droits réservés
                </div>
            </div>
        </div>
    );
};

export default Layoutpublic;