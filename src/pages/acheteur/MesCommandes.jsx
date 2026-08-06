// src/pages/acheteur/MesCommandes.jsx
import { useState, useEffect } from 'react';
import { commandeService } from '@/services/commandes.js';

const MesCommandes = () => {
    const [commandes, setCommandes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCommandes();
    }, []);

    const loadCommandes = async () => {
        try {
            setLoading(true);
            const data = await commandeService.getMyOrders();
            setCommandes(data);
        } catch (error) {
            console.error('Erreur:', error);
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

    if (loading) {
        return <div className="text-center py-10">Chargement...</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">📋 Mes commandes</h1>

            {commandes.length === 0 ? (
                <p className="text-gray-500 text-center py-10">Aucune commande</p>
            ) : (
                <div className="space-y-4">
                    {commandes.map((commande) => (
                        <div key={commande.id} className="card bg-base-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold">Commande #{commande.id}</h3>
                                        <p className="text-sm text-gray-500">
                                            {new Date(commande.dateCommande).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className={`badge ${getBadgeColor(commande.statut)}`}>
                    {commande.statut}
                  </span>
                                </div>

                                <div className="divider my-2"></div>

                                <div className="space-y-1">
                                    {commande.ligneCommandes?.map((ligne) => (
                                        <div key={ligne.id} className="flex justify-between text-sm">
                                            <span>{ligne.product?.name} × {ligne.quantity}</span>
                                            <span>{ligne.prixUnitaire * ligne.quantity} FCFA</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end mt-2">
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

export default MesCommandes;