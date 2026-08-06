// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import monImage from "../assets/culture_afrique.png";

const Register = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        numTel: "",
        adresse: "",
        role: "ACHETEUR",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await register(formData);
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de l'inscription");
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
                        Créer votre compte ici
                    </p>

                    {error && (
                        <div className="alert alert-error text-sm mb-4">{error}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Sélection du rôle */}
                            <div className="flex justify-center gap-4 mb-4">
                                <button
                                    type="button"
                                    className={`border px-6 py-3 rounded ${
                                        formData.role === "ACHETEUR"
                                            ? "border-green-500 bg-green-100 text-green-700"
                                            : "border-green-500 text-green-700 bg-white"
                                    }`}
                                    onClick={() => setFormData({ ...formData, role: "ACHETEUR" })}
                                >
                                    Acheteur
                                </button>
                                <button
                                    type="button"
                                    className={`border px-6 py-3 rounded ${
                                        formData.role === "PRODUCTEUR"
                                            ? "border-green-500 bg-green-100 text-green-700"
                                            : "border-green-500 text-green-700 bg-white"
                                    }`}
                                    onClick={() => setFormData({ ...formData, role: "PRODUCTEUR" })}
                                >
                                    Producteur
                                </button>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Nom & Prénom
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Entrer votre nom & prénom"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Entrer votre email"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    name="numTel"
                                    placeholder="Entrer votre numéro"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={formData.numTel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Adresse
                                </label>
                                <input
                                    type="text"
                                    name="adresse"
                                    placeholder="Votre adresse"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={formData.adresse}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-black">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Votre mot de passe"
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? "Inscription..." : "Enregistrement"}
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm mt-6 text-black">
                        Vous avez déjà un compte ?{" "}
                        <Link to="/login" className="text-green-600 hover:underline">
                            Connexion
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;