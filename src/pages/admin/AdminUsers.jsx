// src/pages/admin/AdminUsers.jsx
import { useState, useEffect } from 'react';
import api from '@/services/api';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const response = await api.get('/admin/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erreur:', error);
            setError('Impossible de charger les utilisateurs');
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId, newRole) => {
        try {
            await api.patch(`/admin/users/${userId}/role`, { role: newRole });
            alert('Rôle modifié avec succès');
            loadUsers();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors du changement de rôle');
        }
    };

    const handleDeleteUser = async (userId, userName) => {
        if (!confirm(`Voulez-vous vraiment supprimer ${userName} ?`)) return;

        try {
            await api.delete(`/admin/users/${userId}`);
            alert('Utilisateur supprimé');
            loadUsers();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la suppression');
        }
    };

    const getRoleBadgeColor = (role) => {
        const colors = {
            ADMIN: 'badge-error',
            PRODUCTEUR: 'badge-primary',
            ACHETEUR: 'badge-success',
        };
        return colors[role] || 'badge-ghost';
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
                <button onClick={loadUsers} className="btn btn-primary mt-4">
                    Réessayer
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold"> Gestion des utilisateurs</h1>
                <span className="badge badge-lg">{users.length} utilisateurs</span>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.numTel}</td>
                            <td>
                                <select
                                    className={`badge ${getRoleBadgeColor(user.role)} cursor-pointer`}
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                >
                                    <option value="ACHETEUR">Acheteur</option>
                                    <option value="PRODUCTEUR">Producteur</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </td>
                            <td>
                                <button
                                    className="btn btn-error btn-xs"
                                    onClick={() => handleDeleteUser(user.id, user.userName)}
                                    disabled={user.role === 'ADMIN'}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;