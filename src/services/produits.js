// src/services/produits.js
import api from './api';

export const produitService = {
    // Liste publique
    getAll: async () => {
        const response = await api.get('/produits');
        return response.data;
    },

    // Détail d'un produit
    getOne: async (id) => {
        const response = await api.get(`/produits/${id}`);
        return response.data;
    },

    // Recherche
    search: async (query) => {
        if (!query || query.trim() === '') {
            return [];
        }
        const response = await api.get(`/produits/search?q=${encodeURIComponent(query)}`);
        return response.data;
    },

    // Mes produits (Producteur)
    getMyProducts: async () => {
        const response = await api.get('/produits/me');
        return response.data;
    },

    // Créer un produit (Producteur)
    create: async (data) => {
        const response = await api.post('/produits', data);
        return response.data;
    },

    // Modifier un produit (Producteur)
    update: async (id, data) => {
        const response = await api.patch(`/produits/${id}`, data);
        return response.data;
    },

    // Supprimer un produit (Producteur)
    delete: async (id) => {
        const response = await api.delete(`/produits/${id}`);
        return response.data;
    },
};