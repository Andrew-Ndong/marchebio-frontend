// src/pages/Public/Produits.jsx
import { useState } from 'react';
import { produitService } from '@/services/produits.js';
import GrilleProduit from '@/components/public/GrilleProduit.jsx';
import Card from '@/components/public/Card.jsx';

const Produits = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults(null);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const results = await produitService.search(query);
      setSearchResults(results);
    } catch (error) {
      console.error('❌ Erreur de recherche:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // ✅ Fonction pour réinitialiser la recherche
  const resetSearch = () => {
    setSearchResults(null);
    setSearchQuery('');
  };

  return (
      <div className="bg-base-200 min-h-screen">
        {/* Formulaire de recherche */}
        <div className="container flex justify-end mx-auto py-5 px-4">
          <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
            <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
              <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
                type="search"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full"
            />
            {isSearching && (
                <span className="loading loading-spinner loading-xs"></span>
            )}
            {searchQuery && (
                <button onClick={resetSearch} className="btn btn-ghost btn-xs">
                  ✕
                </button>
            )}
          </label>
        </div>

        {/* Résultats de recherche ou grille complète */}
        {searchResults !== null ? (
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Résultats pour "{searchQuery}" ({searchResults.length})
                </h2>
                <button
                    onClick={resetSearch}
                    className="btn btn-ghost btn-sm"
                >
                  ← Voir tous les produits
                </button>
              </div>
              {searchResults.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">Aucun produit trouvé</p>
                    <button
                        onClick={resetSearch}
                        className="btn btn-primary mt-4"
                    >
                      Voir tous les produits
                    </button>
                  </div>
              ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
                    {searchResults.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                  </div>
              )}
            </div>
        ) : (
            <GrilleProduit />
        )}
      </div>
  );
};

export default Produits;