// src/pages/acheteur/Panier.jsx
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { commandeService } from '@/services/commandes.js';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Panier = () => {
    const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCommande = async () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        if (cart.length === 0) {
            alert('Votre panier est vide');
            return;
        }

        setLoading(true);
        try {
            const items = cart.map(item => ({
                productId: item.productId,
                quantity: item.quantity
            }));

            await commandeService.create(items);
            clearCart();
            alert('✅ Commande créée avec succès !');
            navigate('/acheteur/commandes');
        } catch (error) {
            alert('❌ Erreur: ' + (error.response?.data?.message || 'Erreur lors de la création'));
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold">Votre panier est vide</h2>
                <p className="text-gray-500 mt-2">
                    Ajoutez des produits depuis la page des produits
                </p>
                <Link to="/produits" className="btn btn-primary mt-4">
                    Voir les produits
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">🛒 Mon Panier</h1>

            <div className="space-y-4">
                {cart.map((item) => (
                    <div key={item.productId} className="card card-side bg-base-100 shadow-sm">
                        <figure className="w-24 h-24 flex-shrink-0">
                            {item.photoData ? (
                                <img src={item.photoData} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-2xl">🥬</div>
                            )}
                        </figure>
                        <div className="card-body p-4">
                            <h3 className="card-title text-base">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.price} FCFA</p>
                            <div className="flex items-center gap-2 mt-2">
                                <button
                                    className="btn btn-ghost btn-xs"
                                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button
                                    className="btn btn-ghost btn-xs"
                                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                    disabled={item.quantity >= item.maxQuantity}
                                >
                                    +
                                </button>
                                <button
                                    className="btn btn-error btn-xs ml-4"
                                    onClick={() => removeFromCart(item.productId)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card bg-base-100 shadow-sm mt-6 p-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <span className="text-lg font-bold">Total: {getTotal()} FCFA</span>
                        <span className="text-sm text-gray-500 ml-4">{cart.length} articles</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-ghost btn-sm" onClick={clearCart}>
                            Vider
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleCommande}
                            disabled={loading}
                        >
                            {loading ? 'Création...' : ' Passer commande'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panier;