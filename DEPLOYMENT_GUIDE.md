# Guide de Déploiement et d'Exploitation
## Site Web de l'ONG FIFAME — Toviklin, Bénin

Ce guide vous accompagne pas à pas pour mettre en ligne le site web de l'ONG FIFAME de façon pérenne, sécurisée et économique.

---

## 1. Option Recommandée : Déploiement sur Vercel (Gratuit & Performant)

Vercel est la plateforme d'hébergement cloud idéale pour les applications React/Vite : gratuite pour les organisations, avec certificat SSL HTTPS automatique et réseau de distribution CDN mondial (très rapide depuis l'Afrique de l'Ouest et l'Europe).

### Méthode via GitHub :
1. Créez un dépôt sur [GitHub](https://github.com) et poussez ce projet :
   ```bash
   git init
   git add .
   git commit -m "Site officiel ONG FIFAME v1.0"
   git branch -M main
   git remote add origin https://github.com/votre-compte/ong-fifame-website.git
   git push -u origin main
   ```
2. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
3. Cliquez sur **« Add New Project »** et importez le dépôt `ong-fifame-website`.
4. Vercel détecte automatiquement le projet **Vite** :
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Cliquez sur **« Deploy »**.
6. En 30 secondes, le site est en ligne avec une URL en `https://ong-fifame.vercel.app`.
7. Dans les réglages de Vercel (**Settings > Domains**), vous pouvez associer votre nom de domaine personnalisé (ex: `fifame-benin.org` ou `ong-fifame.org`).

---

## 2. Option Simple : Déploiement par Glisser-Déposer sur Netlify (Sans ligne de commande)

Si vous ne souhaitez pas utiliser Git :
1. Sur votre ordinateur, exécutez la commande de compilation :
   ```bash
   npm run build
   ```
   Cela crée le dossier `dist/` contenant tous les fichiers finaux du site.
2. Créez un compte gratuit sur [netlify.com](https://www.netlify.com).
3. Allez dans l'onglet **« Sites »** et faites simplement glisser le dossier `dist` dans la zone de dépôt (**Drag & Drop**).
4. Le site est immédiatement en ligne avec HTTPS gratuit.

---

## 3. Option Hébergement Traditionnel (cPanel / OVH / Hostinger / Apache / Nginx)

Si l'ONG possède déjà un hébergement web classique (avec accès cPanel ou FTP) :
1. Compilez le projet en local :
   ```bash
   npm run build
   ```
2. Ouvrez votre client FTP (ex: FileZilla) ou le Gestionnaire de Fichiers de votre cPanel.
3. Uploadez **l'intégralité du contenu du dossier `dist/`** dans la racine web publique de votre serveur (généralement le dossier `public_html` ou `www`).
4. Pour permettre le bon fonctionnement du routage côté client, assurez-vous qu'un fichier `.htaccess` est présent à la racine avec le contenu suivant :
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 4. Gestion Quotidienne via l'Espace d'Administration

Le site intègre un CMS autonome et sécurisé qui ne nécessite pas d'infrastructure serveur lourde ni de base de données SQL coûteuse.

### Accéder à l'administration :
1. Sur n'importe quelle page du site, cliquez sur **« Espace Admin »** (dans la barre supérieure ou dans le pied de page).
2. Entrez le code d'accès : **`fifame2024`**.

### Fonctionnalités disponibles :
* **Ajouter un projet :** renseignez le titre, le lieu, la date, le statut (en cours, réalisé, à venir), le résumé et les résultats observés sur le terrain.
* **Publier une actualité :** rédigez vos comptes rendus de cérémonies, de distributions de kits ou vos communiqués officiels.
* **Enrichir la galerie photos :** ajoutez les nouvelles photos de terrain en indiquant la catégorie (Formations, Sensibilisations, Événements, Actions communautaires, Cérémonies).
* **Consulter les messages :** visualisez les demandes d'information et les propositions de partenariat reçues.
* **Sauvegarde de sécurité (Export JSON) :** téléchargez en un clic une copie complète des données pour archivage.

