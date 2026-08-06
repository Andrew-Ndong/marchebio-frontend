// src/pages/admin/AdminDashboard.jsx
import { useState, useEffect } from 'react';
import api from '../../services/api';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalProducts: 0,
        totalOrders: 0,
        totalRevenue: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {
        try {
            setLoading(true);
            // Récupérer les statistiques
            const users = await api.get('/admin/users');
            const products = await api.get('/produits');
            const orders = await api.get('/admin/commandes');

            // Calculer le chiffre d'affaires
            const totalRevenue = orders.data.reduce((sum, order) => sum + order.montantTotal, 0);

            setStats({
                totalUsers: users.data.length,
                totalProducts: products.data.length,
                totalOrders: orders.data.length,
                totalRevenue: totalRevenue,
            });
        } catch (error) {
            console.error('Erreur chargement stats:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">📊 Dashboard Admin</h1>

            {/* Cartes de statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="stat bg-base-100 shadow rounded-box">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div className="stat-title">Utilisateurs</div>
                    <div className="stat-value text-primary">{stats.totalUsers}</div>
                    <div className="stat-desc">Total des comptes</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <div className="stat-title">Produits</div>
                    <div className="stat-value text-secondary">{stats.totalProducts}</div>
                    <div className="stat-desc">Total des produits</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box">
                    <div className="stat-figure text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <div className="stat-title">Commandes</div>
                    <div className="stat-value text-accent">{stats.totalOrders}</div>
                    <div className="stat-desc">Total des commandes</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box">
                    <div className="stat-figure text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="stat-title">CA Total</div>
                    <div className="stat-value text-success">{stats.totalRevenue} FCFA</div>
                    <div className="stat-desc">Chiffre d'affaires</div>
                </div>
            </div>

            {/* Liens rapides */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h3 className="card-title">Utilisateurs</h3>
                        <p>Gérer les comptes utilisateurs</p>
                        <div className="card-actions justify-end">
                            <a href="/admin/users" className="btn btn-primary btn-sm">Voir</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h3 className="card-title">Commandes</h3>
                        <p>Voir toutes les commandes</p>
                        <div className="card-actions justify-end">
                            <a href="/admin/commandes" className="btn btn-primary btn-sm">Voir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;