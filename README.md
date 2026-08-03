MarchéBio Frontend 🌱

Application frontend de la plateforme MarchéBio, permettant aux utilisateurs d'accéder à une expérience moderne autour des produits biologiques et des producteurs locaux.

Le projet est développé avec React et Vite, avec une architecture pensée pour être rapide, maintenable et facilement déployable.

🚀 Technologies utilisées
⚛️ React — Bibliothèque JavaScript pour la création d'interfaces utilisateur
⚡ Vite — Outil de build et serveur de développement rapide
🟨 JavaScript (ES6+) — Langage principal
🔍 ESLint — Analyse et qualité du code
🐳 Docker — Conteneurisation de l'application
📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

Node.js 22 ou supérieur
npm
Docker (optionnel, uniquement pour l'exécution avec conteneur)

Vérifier les versions installées :

node -v
npm -v
docker -v

📥 Installation
1. Cloner le dépôt
git clone https://github.com/Andrew-Ndong/marchebio-frontend.git

cd marchebio-frontend

2. Installer les dépendances
npm install

🛠️ Développement local

Pour démarrer l'application en mode développement :

npm run dev


Le serveur sera lancé par défaut sur :

http://localhost:5173


L'application supporte le hot reload, permettant de voir instantanément les modifications du code.

🏗️ Build production

Pour générer une version optimisée pour la production :

npm run build


Les fichiers générés seront disponibles dans :

dist/


Cette version contient les fichiers statiques optimisés prêts à être déployés.

👀 Prévisualisation du build

Après avoir généré le build :

npm run preview


L'application sera disponible localement pour vérifier le rendu de production.

🔎 Qualité du code

Pour lancer l'analyse ESLint :

npm run lint


Cette commande permet de détecter :

erreurs JavaScript
problèmes de style
mauvaises pratiques
incohérences potentielles
🐳 Utilisation avec Docker
Construire l'image Docker
docker build -t marchebio-frontend .

Démarrer le conteneur
docker run -p 5173:5173 marchebio-frontend


L'application sera accessible sur :

http://localhost:5173

📁 Structure du projet
marchebio-frontend/
│
├── public/              # Fichiers statiques publics
│
├── src/                 # Code source React
│   ├── assets/          # Ressources graphiques
│   ├── components/      # Composants réutilisables
│   ├── pages/           # Pages de l'application
│   ├── services/        # Appels API et services
│   └── main.jsx         # Point d'entrée React
│
├── Dockerfile           # Configuration Docker
├── package.json         # Dépendances et scripts npm
├── vite.config.js       # Configuration Vite
├── eslint.config.js     # Configuration ESLint
└── README.md            # Documentation du projet


(La structure exacte peut varier selon l'évolution du projet.)

📦 Scripts disponibles
Commande	Description
npm run dev	Lance le serveur de développement
npm run build	Génère la version production
npm run preview	Prévisualise le build production
npm run lint	Vérifie la qualité du code
🌍 Variables d'environnement

Les variables de configuration peuvent être définies dans un fichier :

.env


Exemple :

VITE_API_URL=http://localhost:8080


Les variables utilisées par Vite doivent commencer par :

VITE_

🤝 Contribution

Avant toute modification :

Créer une nouvelle branche :
git checkout -b feature/nouvelle-fonctionnalite

Effectuer les modifications.
Vérifier la qualité du code :
npm run lint

Créer un commit clair :
git commit -m "Ajout d'une nouvelle fonctionnalité"

## 👤 Équipe

**Evans NZATI** — Responsable Backend
[GitHub](https://github.com/EvansNzati007) · [LinkedIn](https://linkedin.com/in/evansnzati)

**NDONG NGOUA Andrew** - Responsable Frontend

---

*Projet tutoré — Master 2 Génie Logiciel, ESGIS Gabon.*
