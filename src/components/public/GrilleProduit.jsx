// src/components/public/GrilleProduit.jsx
import { useState, useEffect } from 'react';
import { produitService } from '@/services/produits.js';
import Card from './Card';

const GrilleProduit = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await produitService.getAll();
            setProducts(data);
            setError(null);
        } catch (err) {
            console.error('Erreur:', err);
            setError('Impossible de charger les produits');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="container mx-auto grid grid-cols-5 gap-4 justify-items-center">
                {[...Array(5)].map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto text-center py-10">
                <p className="text-red-500">{error}</p>
                <button
                    onClick={loadProducts}
                    className="btn btn-primary mt-4"
                >
                    Réessayer
                </button>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="container mx-auto text-center py-10">
                <p className="text-gray-500 text-lg">Aucun produit disponible</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default GrilleProduit;