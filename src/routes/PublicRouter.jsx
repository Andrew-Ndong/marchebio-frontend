// src/routes/PublicRouter.jsx
import { Route, Routes } from 'react-router';
import Home from '@/pages/Public/Home';
import Produits from '@/pages/Public/Produits';
import Equipe from '@/pages/Public/Equipe';
import APropos from '@/pages/Public/APropos';
import Error from '@/utils/Error';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Layoutpublic from '@/layouts/Layoutpublic';

// Importer les pages dashboard
import MesProduits from '@/pages/producteur/MesProduits';
import CommandesRecues from '@/pages/producteur/CommandesRecues';
import Panier from '@/pages/acheteur/Panier';
import MesCommandes from '@/pages/acheteur/MesCommandes';
import AdminDashboard from '@/pages/admin/AdminDashBoard.jsx';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminCommandes from '@/pages/admin/AdminCommandes';

const PublicRouter = () => {
  return (
      <Routes>
        <Route element={<Layoutpublic />}>
          {/* Routes publiques */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />

          {/* Routes protégées - Producteur */}
          <Route path="/producteur/produits" element={<MesProduits />} />
          <Route path="/producteur/commandes" element={<CommandesRecues />} />

          {/* Routes protégées - Acheteur */}
          <Route path="/acheteur/panier" element={<Panier />} />
          <Route path="/acheteur/commandes" element={<MesCommandes />} />

          {/* Routes protégées - Admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/commandes" element={<AdminCommandes />} />

        </Route>
      </Routes>
  );
};

export default PublicRouter;