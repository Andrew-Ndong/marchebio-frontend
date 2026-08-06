// src/pages/Public/APropos.jsx
const APropos = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">🌿 À propos de MarchéBio</h1>

            <div className="max-w-3xl mx-auto space-y-6">
                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Notre mission</h2>
                        <p>
                            MarchéBio est une plateforme innovante qui connecte directement les
                            producteurs locaux aux consommateurs urbains. Notre mission est de
                            réduire les intermédiaires pour offrir des produits frais et de qualité
                            à des prix justes.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Nos valeurs</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>🌱 <strong>Durabilité</strong> - Promotion d'une agriculture respectueuse de l'environnement</li>
                            <li>🤝 <strong>Équité</strong> - Prix justes pour les producteurs et les consommateurs</li>
                            <li>🔄 <strong>Transparence</strong> - Traçabilité des produits de la ferme à l'assiette</li>
                            <li>🌍 <strong>Local</strong> - Valorisation des circuits courts et des producteurs locaux</li>
                        </ul>
                    </div>
                </div>

                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Contact</h2>
                        <div className="space-y-2">
                            <p>📧 Email: contact@marchebio.com</p>
                            <p>📞 Téléphone: +241 77 000 000</p>
                            <p>📍 Adresse: Libreville, Gabon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APropos;