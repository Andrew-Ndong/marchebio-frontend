// src/pages/Public/Equipe.jsx
import { useState } from 'react';
import Andrew from '../../assets/andrew.png';
import Kelly from '../../assets/kelly.jpeg';
import Evans from '../../assets/evans.jpeg';

const Equipe = () => {
    // Données des membres
    const membres = [
        {
            id: 1,
            nom: "BOADI TIKU Kelly",
            role: "Chef de projet",
            poste: "UI/UX Designer",
            description: "Conception et développement de l'interface utilisateur",
            photo: Kelly,
            github: "https://github.com/kellytiku18",
            linkedin: "https://linkedin.com",
        },
        {
            id: 2,
            nom: "NZATI DOUMBI Evans",
            role: "Backend Developer",
            poste: "Backend Developer",
            description: "Responsable de l'architecture backend et de l'API",
            photo: Evans,
            github: "https://github.com/evansnzati",
            linkedin: "https://linkedin.com/in/evansnzati",
        },
        {
            id: 3,
            nom: "NDONG NGOUA Andrew",
            role: "Frontend Developer",
            poste: "Frontend Developer",
            description: "Développement de l'interface utilisateur et intégration des fonctionnalités",
            photo: Andrew,
            github: "https://github.com/Andrew-Ndong",
            linkedin: "https://www.linkedin.com/in/andrew-keci-ndong-ngoua/",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* En-tête avec animation */}
            <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl font-bold mb-4 text-primary">
                    Notre Équipe
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Une équipe passionnée dédiée à la création d'une plateforme agricole durable et innovante
                </p>
            </div>

            {/* Grille des membres - centrée */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    {membres.map((membre) => (
                        <div
                            key={membre.id}
                            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <figure className="px-6 pt-6 relative">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                    {membre.photo ? (
                                        <img
                                            src={membre.photo}
                                            alt={membre.nom}
                                            className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-primary/20 group-hover:border-primary transition-all duration-300"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold mx-auto">
                                            {membre.nom.charAt(0)}
                                        </div>
                                    )}

                                    {/* ✅ Badge de rôle - Version améliorée */}
                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                                        <span className="badge badge-primary badge-md px-4 py-2.5 text-white font-semibold shadow-lg border-2 border-white/50 text-xs tracking-wide">
                                            {membre.role}
                                        </span>
                                    </div>
                                </div>
                            </figure>

                            <div className="card-body items-center text-center pt-8">
                                <h2 className="card-title text-lg group-hover:text-primary transition-colors duration-300">
                                    {membre.nom}
                                </h2>
                                <p className="text-sm text-gray-500">{membre.poste}</p>
                                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                    {membre.description}
                                </p>

                                {/* Séparateur animé */}
                                <div className="w-12 h-0.5 bg-primary/30 group-hover:bg-primary transition-all duration-300 my-3"></div>

                                {/* Réseaux sociaux */}
                                <div className="card-actions justify-center gap-3">
                                    <a
                                        href={membre.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href={membre.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost btn-sm btn-square hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pied de page avec animation */}
            <div className="text-center mt-16 pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                    Ensemble pour une agriculture durable et locale 🌱
                </p>
            </div>
        </div>
    );
};

export default Equipe;