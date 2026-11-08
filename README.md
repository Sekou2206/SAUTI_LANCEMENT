# Pack Lancement, par SAUTI

Page de vente du Pack Lancement, à l'identité SAUTI (palette #ff4328, #fffefa, #000000). Une seule page, aucun outil de build.

## Lancer en local

```bash
cd chemin/vers/le/dossier && python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Mettre en ligne

Déposer tous les fichiers à la racine du dépôt GitHub, puis Settings > Pages > Deploy from a branch > main > / (root). Fonctionne aussi sur n'importe quel hébergement statique (Hostinger, Netlify, OVH).

## Boutons à relier

Les boutons de commande ouvrent pour l'instant un e-mail vers contact@agencysauti.com avec le nom de la formule en objet. Pour encaisser directement, remplacer ces liens dans `index.html` par vos liens de paiement ou de formulaire :

- `Choisir le Stand` : formule Le Stand
- `Choisir la Boutique` : formule La Boutique
- `Choisir le Magasin` : formule Le Magasin
- `Poser une question` : bas de page

## Fichiers

| Fichier | Rôle |
| --- | --- |
| index.html | La page de vente |
| style.css | Styles |
| script.js | Menu mobile, couleur de la barre selon le fond, apparitions au scroll |
| logo-dark.png, logo-cream.png | Logo SAUTI pour fond clair et fond sombre |
| inter-*.woff2 | Police Inter (SF Pro est utilisée sur Mac et iPhone) |
| favicon.png, apple-touch-icon.png | Icônes |
