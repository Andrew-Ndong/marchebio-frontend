// src/components/public/Card.jsx
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();

    // Si pas de produit, afficher un placeholder
    if (!product) {
        return (
            <div className="card bg-base-100 w-60 shadow-xl">
                <figure className="px-6 pt-6">
                    <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                        📷
                    </div>
                </figure>
                <div className="card-body">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {

        addToCart(product, 1);
        alert(`✅ ${product.name} ajouté au panier !`);
    };

    return (
        <div className="card bg-base-100 w-60 shadow-xl hover:shadow-2xl transition-shadow">
            <figure className="px-6 pt-6">
                {product.photoData ? (
                    <img
                        src={product.photoData}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-xl"
                    />
                ) : (
                    <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-4xl">
                        🥬
                    </div>
                )}
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-base">{product.name}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-green-600">
            {product.price} FCFA
          </span>
                    <span className="text-xs text-gray-400">
            Stock: {product.quantity}
          </span>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/produits/${product.id}`} className="btn btn-ghost btn-sm">
                        Détail
                    </Link>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleAddToCart}
                        disabled={product.quantity === 0}
                    >
                        {product.quantity === 0 ? 'Rupture' : 'Ajouter'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;