# Les petits plats — Moteur de recherche de recettes

Projet P7 de la formation Développeur d’application JavaScript React (OpenClassroom). Site de recettes de cuisine pour l’entreprise « Les petits plats », avec un moteur de recherche performant (recherche principale + filtres par tags), deux implémentations d’algorithme comparées (boucles natives vs programmation fonctionnelle) et une interface responsive réalisée avec Tailwind CSS.

## Court texte sur le projet

*Les petits plats* est une maquette de site de recettes (type Marmiton / 750g). La mission consiste à concevoir l’interface de recherche puis à développer **deux algorithmes de recherche** (boucles natives et méthodes de tableau `filter` / `map` / `reduce`) pour filtrer un jeu de 50 recettes fourni en JSON. Les deux versions sont comparées en performance (ex. Jsben.ch) ; la fiche d’investigation de fonctionnalité et un document pour le Back-end expliquent le choix de l’algorithme retenu. Le code respecte les principes du Green Code (fonctions réutilisables) et les bonnes pratiques de sécurité (pas d’injection HTML).

---

## Présentation du projet

Le site permet de :

- **Consulter** une page d’accueil avec un bandeau et une grille de cartes recettes (image, nom, temps, ingrédients, description).
- **Rechercher** des recettes via un champ de recherche principal (recherche dans le nom, les ingrédients, la description, etc., selon le cas d’utilisation).
- **Filtrer** les recettes par tags (ingrédients, appareils, ustensiles) via des listes déroulantes ou boutons.
- **Afficher** le nombre de recettes trouvées et mettre à jour la grille en temps réel.

L’objectif est une recherche **rapide et fluide** pour l’utilisateur. Deux implémentations de l’algorithme de recherche principal sont développées sur des branches Git distinctes, puis comparées pour retenir la plus performante.

## Fonctionnalités

| Fonctionnalité | Description |
|----------------|--------------|
| Page d’accueil | Bandeau « Les petits plats », grille de cartes recettes (responsive). |
| Recherche principale | Champ de recherche : filtre les recettes selon le texte saisi (nom, ingrédients, description, etc.). |
| Filtres par tags | Listes (ingrédients, appareils, ustensiles) pour affiner les résultats. |
| Affichage des résultats | Libellé « X recette(s) trouvée(s) » et grille mise à jour dynamiquement. |
| Cartes recettes | Factory pattern : image, temps, titre, section recette, ingrédients (nom, quantité, unité). |
| Algorithmes comparés | Version 1 : boucles natives (`for`, `while`). Version 2 : programmation fonctionnelle (`forEach`, `filter`, `map`, `reduce`). |
| Performance | Comparaison des deux algorithmes (ex. Jsben.ch), recommandation dans la fiche d’investigation. |
| Green Code & sécurité | Fonctions réutilisables ; pas d’injection de balises HTML via les formulaires. |

## Technologies

- **HTML5** (sémantique, landmarks, `aria-label`, `aria-live` pour le compteur de résultats)
- **Tailwind CSS** (build via CLI : `src/main.css` → `style.css`), responsive, grille en CSS Grid
- **JavaScript vanilla** (pas de framework ; scripts chargés dans `index.html`)
- **Données** : tableau JSON de 50 recettes dans `recipes.js`

## Structure du projet

```
.
├── index.html              # Page unique (header + grille recettes)
├── main.js                 # Point d'entrée : affichage initial des recettes
├── recipes.js              # Données : tableau JSON des 50 recettes
├── style.css               # CSS compilé (généré depuis src/main.css)
├── src/
│   └── main.css            # Source Tailwind (entrée du build)
├── factory-pattern/
│   ├── card.js             # Factory des cartes recettes (getRecipeCardDOM)
│   └── resultats.js        # Mise à jour du libellé "X recettes trouvées"
├── assets/
│   └── images/             # Logo, header, images des recettes (recettes/)
├── RESUME_PROJET.md        # Résumé détaillé du cas d'utilisation et livrables
├── package.json
└── package-lock.json
```

## Installation et lancement

### Utilisation simple (sans Node.js)

1. Cloner ou télécharger le projet.
2. Générer le CSS une fois (voir ci‑dessous) ou utiliser un `style.css` déjà présent.
3. Ouvrir `index.html` dans un navigateur (ou servir le dossier avec un serveur local si nécessaire).

### Avec Node.js (build Tailwind)

À la racine du dépôt :

```bash
npm install
npm run build
```

- **`npm run build`** : compile `src/main.css` vers `style.css`.
- **`npm run dev`** : même compilation en mode watch (recompilation à chaque modification de `src/main.css`).

Ensuite, ouvrir `index.html` dans un navigateur.

## Données

Les recettes sont définies dans **`recipes.js`** sous forme d’un tableau global `recipes`. Chaque recette contient notamment :

- `id`, `name`, `image`, `time`, `description`
- `ingredients` (tableau d’objets : `ingredient`, `quantity`, `unit`)
- `appliance`, `ustensils`, `servings`

La recherche principale et les filtres par tags s’appliquent à ce tableau ; les cartes sont générées via la factory dans `factory-pattern/card.js` et le compteur de résultats via `factory-pattern/resultats.js`.

## Livrables (contexte OpenClassroom)

- Interface de recherche fidèle à la maquette (Figma), code validable W3C.
- Deux branches Git pour les deux implémentations de l’algorithme de recherche principal.
- Fiche d’investigation de fonctionnalité : description des deux algorithmes, algorigrammes, résultats des tests de performance, recommandation.
- Document pour l’équipe Back-end expliquant le travail réalisé et l’algorithme retenu.

## Auteur

Projet réalisé dans le cadre du **Projet P7 – Développez un algorithme de recherche en JavaScript**, formation Développeur d’application JavaScript React, OpenClassroom (cas d’utilisation #03 – Filtrer les recettes dans l’interface utilisateur).
