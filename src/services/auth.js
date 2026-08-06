// src/services/auth.js
import api from './api';

export const authService = {
    // Inscription
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },

    // Connexion
    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },

    // Déconnexion
    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    },

    // Récupérer l'utilisateur connecté
    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    // Vérifier si l'utilisateur est connecté
    isAuthenticated: () => {
        return !!localStorage.getItem('access_token');
    },

    // Vérifier si l'utilisateur a un rôle spécifique
    hasRole: (role) => {
        const user = authService.getCurrentUser();
        return user?.role === role;
    },
};