// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import monImage from "../assets/culture_afrique.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await login(email, password);

            // Redirection selon le rôle
            if (data.user.role === "PRODUCTEUR") {
                navigate("/producteur/produits");
            } else if (data.user.role === "ACHETEUR") {
                navigate("/acheteur/panier");
            } else if (data.user.role === "ADMIN") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch (err) {
            setError("Email ou mot de passe incorrect");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="flex bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">
                {/* Partie image */}
                <div className="w-1/2 hidden md:block">
                    <img src={monImage} alt="Agriculture" className="w-full h-full object-cover" />
                </div>

                {/* Formulaire */}
                <div className="w-full md:w-1/2 p-10">
                    <h1 className="text-3xl font-bold text-center mb-2 text-black">
                        Bienvenue sur MarchéBio
                    </h1>
                    <p className="text-center text-gray-500 mb-8">
                        Entrez vos identifiants ici
                    </p>

                    {error && (
                        <div className="alert alert-error text-sm mb-4">{error}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Entrer votre email"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    placeholder="Votre mot de passe"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? "Connexion..." : "Connexion"}
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm mt-6 text-black">
                        Vous n'avez pas de compte ?{" "}
                        <Link to="/register" className="text-green-600 hover:underline">
                            Inscription
                        </Link>
                    </p>

                    {/* Comptes de test */}
                    <div className="collapse collapse-arrow mt-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-sm font-medium">
                            📝 Comptes de test
                        </div>
                        <div className="collapse-content text-xs">
                            <p><strong>Producteur:</strong> producteur@marchebio.com / password123</p>
                            <p><strong>Acheteur:</strong> acheteur@marchebio.com / password123</p>
                            <p><strong>Admin:</strong> admin@marchebio.com / password123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;