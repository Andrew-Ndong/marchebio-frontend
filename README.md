MarchéBio Frontend

Application frontend développée avec React et Vite pour la plateforme MarchéBio.

Prérequis

Avant de démarrer le projet, assurez-vous d'avoir installé :

Node.js 22 ou supérieur
npm
Docker (optionnel)
Installation

Clonez le dépôt :

git clone <url-du-repository>
cd marchebio-frontend


Installez les dépendances :

npm install

Lancement en mode développement

Démarrez le serveur de développement :

npm run dev


L'application sera accessible à l'adresse :

http://localhost:5173

Construction pour la production

Générez les fichiers de production :

npm run build


Les fichiers compilés seront disponibles dans le dossier :

dist/

Prévisualisation de la version de production

Après le build :

npm run preview

Vérification du code

Exécutez ESLint :

npm run lint

Exécution avec Docker
Construire l'image
docker build -t marchebio-frontend .

Démarrer le conteneur
docker run -p 5173:5173 marchebio-frontend


L'application sera accessible à l'adresse :

http://localhost:5173

Structure du projet
marchebio-frontend/
├── public/
├── src/
├── Dockerfile
├── package.json
├── vite.config.js
└── README.md

Technologies utilisées
React
Vite
JavaScript (ES6+)
ESLint
Docker

## 👤 Équipe

**Evans NZATI** — Responsable Backend
[GitHub](https://github.com/EvansNzati007) · [LinkedIn](https://linkedin.com/in/evansnzati)

**NDONG NGOUA Andrew** - Responsable Frontend

---

*Projet tutoré — Master 2 Génie Logiciel, ESGIS Gabon.*
