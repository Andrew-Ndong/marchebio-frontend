// src/components/public/Hero.jsx
import legume from '@/assets/legume.png';
import champ from '@/assets/champ_mais.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            className="hero min-h-[600px]"
            style={{
                backgroundImage: `url(${champ})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay bg-primary/80"></div>
            <div className="hero-content w-full justify-between lg:flex-row-reverse text-white">
                <img
                    src={legume}
                    className="max-w-sm rounded-4xl shadow-2xl hidden lg:block"
                    alt="Produits frais"
                />
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold">Découvrir une agriculture <br/>moderne et durable</h1>
                    <p className="py-6 text-lg">
                        MarchéBio, une plateforme qui met en avant les producteurs et leurs clients
                        <br/>sécurisé et durable
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/produits" className="btn bg-white text-primary hover:bg-gray-100">
                            Voir les produits
                        </Link>
                        <Link to="/register" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                            Devenir producteur
                        </Link>
                    </div>

                    {/* Statistiques */}
                    <div className="flex flex-wrap gap-8 mt-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white">50+</h3>
                            <p className="text-sm opacity-80">Producteurs</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">200+</h3>
                            <p className="text-sm opacity-80">Produits</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">1000+</h3>
                            <p className="text-sm opacity-80">Commandes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;