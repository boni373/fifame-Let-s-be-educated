# Site Web Institutionnel Officiel de l'ONG FIFAME
### *« let's be educated »* — Toviklin, République du Bénin

Bienvenue dans le dépôt du site web officiel de l'**ONG FIFAME**, une organisation non gouvernementale reconnue par l'État Béninois, dédiée à l'éducation, à l'hébergement des orphelines, à la formation professionnelle des jeunes filles et au développement communautaire à Toviklin (Département du Couffo).

---

## 🌟 Identité & Fondements du Projet

* **Nom officiel :** ONG FIFAME – *« let's be educated »*
* **Signification de FIFAME :** En langue fon, *Fifamè* signifie *« La paix est à l'intérieur »* ou *« Dans la paix »*.
* **Fondation :** Mai 2020 par **Prosper Woinsou** (Président-Fondateur).
* **Siège :** Commune de Toviklin, Département du Couffo, République du Bénin.
* **Partenaires internationaux confirmés :**
  - **Eine Chance e.V.** (Waiblingen, Allemagne) — Partenaire stratégique pour l'éducation des filles et la prise en charge au foyer.
  - **Freunde Benins e.V.** (Allemagne) — Appui aux actions communautaires et sanitaires.
  - **Wieduwilt Kommunikation** (Allemagne) — Mécénat en communication et rayonnement.
* **Page Facebook officielle :** [https://www.facebook.com/fifameletsbe](https://www.facebook.com/fifameletsbe)

---

## 🚀 Fonctionnalités Clés du Site

1. **Accueil Institutionnel Haut de Gamme :**
   - Grande bannière immersive avec message fort, boutons d'action rapides (« Découvrir FIFAME », « Nous Soutenir », « Espace Partenaires »).
   - Bandeau d'indicateurs et repères vérifiés (Fondation 2020, 5 domaines d'action, coopération internationale).
   - Citation et engagement du fondateur Prosper Woinsou.

2. **À Propos de FIFAME (Onglets Interactifs) :**
   - Histoire et genèse du fondateur (orphelin soutenu par un projet allemand ayant dédié sa vie à sa communauté).
   - Vision, Mission et Valeurs fondamentales (Solidarité, Intégrité, Égalité des chances, Écologie).
   - Organisation et Gouvernance (Bureau exécutif, équipe de coordination locale à Toviklin).
   - Charte de Transparence et Rigueur financière (garantie aux donateurs).

3. **Nos Domaines d'Intervention :**
   - Éducation & Scolarisation (Kits scolaires complets, paiement des écolages).
   - Formation Professionnelle & Autonomisation Féminine (Couture, coiffure, artisanat).
   - Hébergement Solidaire & Foyer d'Accueil (*Wohngemeinschaft*).
   - Bibliothèque, Langue Française & Éveil Culturel.
   - Salubrité Citoyenne & Reboisement Écologique.
   - Solidarité Communautaire & Célébration annuelle du « Noël des Enfants ».

4. **Nos Projets et Activités :**
   - Filtres par statut (Programmes actifs en cours, Activités réalisées, Projets futurs / recherche de fonds).
   - Fiches détaillées dans une modale dédiée avec objectifs, localisation, résultats documentés et photos.

5. **Actualités & Communiqués :**
   - Filtres thématiques (Actualités, Communiqués officiels, Rapports de terrain, Événements).
   - Modal de lecture complète avec temps de lecture estimé, tags et partage social (Facebook, WhatsApp, copie du lien).

6. **Galerie Photos & Vidéos :**
   - Filtres par catégories réelles : Formations, Sensibilisations, Événements, Actions communautaires, Cérémonies, Autres.
   - Visionneuse plein écran (*Lightbox*) avec navigation fléchée au clavier, zoom, légendes et dates.

7. **Nos Partenaires & Espace « Devenir Partenaire » :**
   - Présentation des partenaires institutionnels, techniques et associatifs confirmés.
   - Espace dédié aux entreprises (mécénat RSE), fondations philanthropiques, institutions et bailleurs de fonds.
   - Formulaire dédié de proposition de partenariat avec sélection de domaines d'intervention.

8. **Nous Soutenir (Dons, Parrainage & Bénévolat) :**
   - Simulateur d'impact interactif (15 € = Kit scolaire complet, 35 € = 1 mois d'hébergement au foyer, 75 € = 1 trimestre de formation professionnelle, 200 € = 1 machine à coudre).
   - Modalités de versement : Reçu fiscal européen via le partenaire allemand *Eine Chance e.V.*, Mobile Money Bénin (MTN / Moov).
   - Parrainage d'un enfant et engagement bénévole.

9. **Contact & Accès :**
   - Formulaire de contact fonctionnel avec protection anti-spam (honeypot) et validation stricte.
   - Coordonnées officielles du siège à Toviklin et de l'antenne en Allemagne.
   - Bouton flottant WhatsApp avec message pré-rempli.

10. **Espace d'Administration Sécurisé (CMS) :**
    - Accès protégé par code PIN (Code par défaut : `fifame2024`).
    - Gestion complète (Ajout / Suppression) des Projets, Actualités, Photos de galerie et Partenaires.
    - Consultation et gestion des messages de contact et candidatures de partenariat.
    - Sauvegarde & Restauration complète en un clic via fichier JSON portable.
    - Option de réinitialisation d'usine aux valeurs vérifiées d'origine.

11. **SEO & Performance :**
    - Métadonnées complètes OpenGraph et Twitter Cards.
    - Données structurées Schema.org JSON-LD de type `NGO`.
    - Fichiers `sitemap.xml` et `robots.txt` inclus.
    - Score Lighthouse ultra-optimisé pour les réseaux mobiles 3G/4G.

---

## 🛠️ Technologies Utilisées

* **Framework :** React 18 + Vite (Bundle ultra-léger et temps de chargement instantané).
* **Langage :** TypeScript (typage strict des données institutionnelles).
* **Design :** Tailwind CSS (palette personnalisée inspirée du logo officiel `#D8232A`).
* **Icônes :** Lucide React.
* **Persistance :** LocalStorage + Export/Import JSON pour une autonomie totale sans dépendance de base de données lourde.

---

## 💻 Démarrage Rapide

### 1. Prérequis
Node.js (v18+) et npm.

### 2. Installation
```bash
npm install
```

### 3. Lancer en mode développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:3000`.

### 4. Compiler pour la production
```bash
npm run build
```
Le dossier optimisé et autonome `dist/` est généré, prêt à être déployé sur n'importe quel hébergeur web.

### 5. Prévisualiser la version de production
```bash
npm run preview
```
Accessible sur `http://localhost:4173`.

---

## 🌐 Déploiement en Ligne

Consultez le guide détaillé [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) pour les instructions de mise en ligne sur :
- **Vercel** (Recommandé - Gratuit et instantané)
- **Netlify** (Glisser-déposer du dossier `dist/`)
- **Hébergement classique cPanel / Apache / Nginx** (via FTP)
- **GitHub Pages**

---

## 🔒 Administration du Site

1. Cliquez sur le lien **« Espace Admin »** situé en haut de page ou dans le pied de page du site.
2. Entrez le code PIN par défaut : `fifame2024`.
3. Vous pouvez désormais ajouter de nouvelles actualités, de nouveaux projets, importer vos nouvelles photographies de terrain et consulter les messages reçus.
4. Pensez à faire un **Export JSON** régulièrement dans l'onglet « Sauvegarde & Export » pour archiver vos données.

