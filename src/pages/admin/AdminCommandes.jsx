// src/pages/admin/AdminCommandes.jsx
import { useState, useEffect } from 'react';
import api from '@/services/api';

const AdminCommandes = () => {
    const [commandes, setCommandes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadCommandes();
    }, []);

    const loadCommandes = async () => {
        try {
            setLoading(true);
            const response = await api.get('/admin/commandes');
            setCommandes(response.data);
        } catch (error) {
            console.error('Erreur:', error);
            setError('Impossible de charger les commandes');
        } finally {
            setLoading(false);
        }
    };

    const getBadgeColor = (statut) => {
        const colors = {
            NOUVELLE: 'badge-warning',
            PREPAREE: 'badge-info',
            LIVREE: 'badge-success',
        };
        return colors[statut] || 'badge-ghost';
    };

    const getStatusLabel = (statut) => {
        const labels = {
            NOUVELLE: 'Nouvelle',
            PREPAREE: 'Préparée',
            LIVREE: 'Livrée',
        };
        return labels[statut] || statut;
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
                <button onClick={loadCommandes} className="btn btn-primary mt-4">
                    Réessayer
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">📦 Toutes les commandes</h1>
                <span className="badge badge-lg">{commandes.length} commandes</span>
            </div>

            {commandes.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">Aucune commande</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {commandes.map((commande) => (
                        <div key={commande.id} className="card bg-base-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="flex flex-wrap justify-between items-start gap-2">
                                    <div>
                                        <h3 className="font-semibold">Commande #{commande.id}</h3>
                                        <p className="text-sm text-gray-500">
                                            {new Date(commande.dateCommande).toLocaleDateString()} -
                                            {commande.user?.userName}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`badge ${getBadgeColor(commande.statut)}`}>
                                            {getStatusLabel(commande.statut)}
                                        </span>
                                    </div>
                                </div>

                                <div className="divider my-2"></div>

                                <div className="space-y-1">
                                    {commande.ligneCommandes?.map((ligne) => (
                                        <div key={ligne.id} className="flex flex-wrap justify-between text-sm">
                                            <span>
                                                {ligne.product?.name} × {ligne.quantity}
                                            </span>
                                            <span>{ligne.prixUnitaire * ligne.quantity} FCFA</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap justify-between items-center mt-2">
                                    <div className="flex flex-wrap gap-2 text-sm">
                                        <span className="text-gray-500">
                                            Acheteur: {commande.user?.userName}
                                        </span>
                                        <span className="text-gray-500">
                                            📧 {commande.user?.email}
                                        </span>
                                        <span className="text-gray-500">
                                            📞 {commande.user?.numTel}
                                        </span>
                                    </div>
                                    <span className="font-bold">Total: {commande.montantTotal} FCFA</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminCommandes;