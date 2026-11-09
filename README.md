# Anza

Page de vente d'Anza, un projet commun de SAUTI et SC Project. Palette bleu nuit : #0A1020 (nuit), #1E3A8A (bleu obscur), #2563EB (boutons sur fond sombre), #F6F8FC (fond clair). Une seule page, aucun outil de build.

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
| script.js | Menu mobile, couleur de la barre selon le fond, onglets des captures, apparitions au scroll |
| logo-cream.png | Logo SAUTI, en pied de page |
| logo-scproject.png | Logo SC Project, en pied de page |
| inter-*.woff2 | Police Inter (SF Pro est utilisée sur Mac et iPhone) |
| favicon.png, apple-touch-icon.png | Icônes Anza |
| outil-*.webp | Captures des outils (exemple fictif), en bleu nuit clair et sombre en alternance |
| agent-*.webp | Captures de l'agent personal branding : entretien de départ, question de la semaine, journal |
