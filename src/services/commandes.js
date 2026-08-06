// src/services/commandes.js
import api from './api';

export const commandeService = {
    // Créer une commande (Acheteur)
    create: async (items) => {
        const response = await api.post('/commandes', { items });
        return response.data;
    },

    // Mes commandes (Acheteur)
    getMyOrders: async () => {
        const response = await api.get('/commandes/me');
        return response.data;
    },

    // Commandes reçues (Producteur)
    getReceivedOrders: async () => {
        const response = await api.get('/commandes/producteur');
        return response.data;
    },

    // Changer statut (Producteur)
    updateStatus: async (commandeId, statut) => {
        const response = await api.patch(`/commandes/${commandeId}/statut`, { statut });
        return response.data;
    },
};