# 🌱 MarchéBio Frontend

<div align="center">

Frontend de la plateforme **MarchéBio**, permettant aux consommateurs d'accéder facilement à des produits biologiques et de soutenir les producteurs locaux.

Développé avec **React + Vite** pour offrir une interface moderne, rapide et performante.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📚 Table des matières

- [À propos](#-à-propos)
- [Technologies](#-technologies)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Développement](#-développement-local)
- [Build Production](#-build-production)
- [Prévisualisation](#-prévisualisation-du-build)
- [Docker](#-docker)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Variables d'environnement](#-variables-denvironnement)
- [Contribution](#-contribution)
- [Équipe](#-équipe)

---

# 📖 À propos

MarchéBio est une plateforme web visant à faciliter la mise en relation entre les producteurs locaux et les consommateurs.

Le frontend est développé avec **React** et **Vite** afin de garantir :

- ⚡ des performances élevées
- 🎨 une interface moderne
- 🔥 un rechargement instantané (Hot Reload)
- 📦 une architecture facilement maintenable
- 🐳 un déploiement simplifié grâce à Docker

---

# 🚀 Technologies

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🔍 ESLint
- 🐳 Docker

---

# 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js **22+**
- npm
- Docker *(optionnel)*

Vérifiez vos versions :

```bash
node -v
npm -v
docker -v
```

---

# 📥 Installation

## 1. Cloner le dépôt

```bash
git clone https://github.com/Andrew-Ndong/marchebio-frontend.git

cd marchebio-frontend
```

## 2. Installer les dépendances

```bash
npm install
```

---

# 🛠️ Développement local

Lancer le serveur de développement :

```bash
npm run dev
```

L'application sera disponible sur :

```
http://localhost:5173
```

Grâce au **Hot Reload**, chaque modification est automatiquement prise en compte.

---

# 🏗️ Build Production

Générer la version optimisée :

```bash
npm run build
```

Les fichiers générés seront placés dans :

```
dist/
```

---

# 👀 Prévisualisation du build

Tester localement le build de production :

```bash
npm run preview
```

Puis ouvrir :

```
http://localhost:4173
```

---

# 🔎 Qualité du code

Exécuter ESLint :

```bash
npm run lint
```

Cette commande vérifie :

- les erreurs JavaScript
- les problèmes de style
- les bonnes pratiques
- les incohérences potentielles

---

# 🐳 Docker

## Construire l'image

```bash
docker build -t marchebio-frontend .
```

---

## Vérifier que l'image existe

```bash
docker images
```

---

## Lancer le conteneur

```bash
docker run -d \
  --name marchebio-frontend \
  -p 5173:5173 \
  marchebio-frontend
```

---

## Vérifier les conteneurs

```bash
docker ps
```

---

## Consulter les logs

```bash
docker logs marchebio-frontend
```

---

## Arrêter le conteneur

```bash
docker stop marchebio-frontend
```

---

## Supprimer le conteneur

```bash
docker rm marchebio-frontend
```

---

## Supprimer l'image

```bash
docker rmi marchebio-frontend
```

---

Une fois le conteneur démarré, l'application est accessible à l'adresse :

```
http://localhost:5173
```

---

# 📦 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le build de production |
| `npm run preview` | Prévisualise le build |
| `npm run lint` | Vérifie la qualité du code |

---

# 📁 Structure du projet

```
marchebio-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── layouts/
│   ├── utils/
│   └── main.jsx
│
├── Dockerfile
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

> La structure peut évoluer au fil du développement.

---

# 🌍 Variables d'environnement

Créer un fichier :

```
.env
```

Exemple :

```env
VITE_API_URL=http://localhost:8080
```

Toutes les variables utilisées par Vite doivent commencer par :

```text
VITE_
```

---

# 🤝 Contribution

1. Créer une branche

```bash
git checkout -b feature/ma-fonctionnalite
```

2. Effectuer les modifications.

3. Vérifier le code

```bash
npm run lint
```

4. Créer un commit

```bash
git commit -m "Ajout d'une nouvelle fonctionnalité"
```

5. Pousser la branche

```bash
git push origin feature/ma-fonctionnalite
```

6. Ouvrir une Pull Request.

---

# 👥 Équipe

### Evans NZATI

**Responsable Backend**

- GitHub : https://github.com/EvansNzati007
- LinkedIn : https://linkedin.com/in/evansnzati

---

### NDONG NGOUA Andrew

**Responsable Frontend**

---

## 🎓 Projet académique

Projet tutoré réalisé dans le cadre du **Master 2 Génie Logiciel** à **ESGIS Gabon**.

---

<div align="center">

⭐ N'hésitez pas à laisser une étoile au projet si vous l'appréciez !

</div>
