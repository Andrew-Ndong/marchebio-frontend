// src/pages/producteur/MesProduits.jsx
import { useState, useEffect } from 'react';
import { produitService } from '@/services/produits.js';
import { useAuth } from '../../context/AuthContext';

const MesProduits = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // États pour le formulaire de création/modification
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        photoData: '',
        photoMimeType: 'image/jpeg'
    });
    const [submitting, setSubmitting] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await produitService.getMyProducts();
            setProducts(data);
        } catch (error) {
            console.error('Erreur:', error);
            setError('Impossible de charger vos produits');
        } finally {
            setLoading(false);
        }
    };

    // Ouvrir le modal pour créer un produit
    const openCreateModal = () => {
        setEditingProduct(null);
        setFormData({
            name: '',
            description: '',
            price: '',
            quantity: '',
            photoData: '',
            photoMimeType: 'image/jpeg'
        });
        setShowModal(true);
    };

    // Ouvrir le modal pour modifier un produit
    const openEditModal = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            description: product.description || '',
            price: product.price.toString(),
            quantity: product.quantity.toString(),
            photoData: product.photoData || '',
            photoMimeType: product.photoMimeType || 'image/jpeg'
        });
        setShowModal(true);
    };

    // Gérer les changements du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Gérer l'upload de photo
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setFormData(prev => ({
                ...prev,
                photoData: event.target.result,
                photoMimeType: file.type
            }));
        };
        reader.readAsDataURL(file);
    };

    // Soumettre le formulaire (création ou modification)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const data = {
                name: formData.name,
                description: formData.description,
                price: parseFloat(formData.price),
                quantity: parseInt(formData.quantity),
                photoData: formData.photoData || null,
                photoMimeType: formData.photoMimeType || null
            };

            if (editingProduct) {
                // Modification
                await produitService.update(editingProduct.id, data);
                alert('Produit modifié avec succès');
            } else {
                // Création
                await produitService.create(data);
                alert('Produit créé avec succès');
            }

            setShowModal(false);
            loadProducts();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur: ' + (error.response?.data?.message || 'Une erreur est survenue'));
        } finally {
            setSubmitting(false);
        }
    };

    // Supprimer un produit
    const handleDelete = async (id, name) => {
        if (!confirm(`Voulez-vous vraiment supprimer "${name}" ?`)) return;

        try {
            await produitService.delete(id);
            alert('Produit supprimé avec succès');
            loadProducts();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur: ' + (error.response?.data?.message || 'Impossible de supprimer ce produit'));
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-red-500">{error}</p>
                <button onClick={loadProducts} className="btn btn-primary mt-4">
                    Réessayer
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Mes produits</h1>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={openCreateModal}
                >
                    Nouveau produit
                </button>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-20">
                    <div className="text-6xl mb-4">📦</div>
                    <p className="text-gray-500 text-lg">Vous n'avez pas encore de produits</p>
                    <button
                        onClick={openCreateModal}
                        className="btn btn-primary mt-4"
                    >
                        Ajouter votre premier produit
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                            <figure className="px-4 pt-4">
                                {product.photoData ? (
                                    <img
                                        src={product.photoData}
                                        alt={product.name}
                                        className="w-full h-40 object-cover rounded"
                                    />
                                ) : (
                                    <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center text-4xl">
                                        🥬
                                    </div>
                                )}
                            </figure>
                            <div className="card-body p-4">
                                <h3 className="card-title text-base">{product.name}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-bold text-green-600">
                                        {product.price} FCFA
                                    </span>
                                    <span className={`text-sm ${product.quantity > 0 ? 'text-gray-500' : 'text-red-500'}`}>
                                        Stock: {product.quantity}
                                    </span>
                                </div>
                                <div className="card-actions justify-end mt-2">
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => openEditModal(product)}
                                    >
                                        ✏️ Modifier
                                    </button>
                                    <button
                                        className="btn btn-error btn-xs"
                                        onClick={() => handleDelete(product.id, product.name)}
                                    >
                                        🗑️ Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal de création/modification */}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-md">
                        <h3 className="font-bold text-lg">
                            {editingProduct ? 'Modifier le produit' : 'Nouveau produit'}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <div>
                                <label className="label label-text">Nom du produit</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label label-text">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered w-full"
                                    rows="2"
                                />
                            </div>

                            <div>
                                <label className="label label-text">Prix (FCFA)</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    min="0.01"
                                    step="0.01"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label label-text">Quantité en stock</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    min="0"
                                    step="1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label label-text">Photo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    className="file-input file-input-bordered w-full"
                                />
                                {formData.photoData && (
                                    <div className="mt-2">
                                        <img
                                            src={formData.photoData}
                                            alt="Aperçu"
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="modal-action">
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={() => setShowModal(false)}
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Enregistrement...' : 'Enregistrer'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MesProduits;