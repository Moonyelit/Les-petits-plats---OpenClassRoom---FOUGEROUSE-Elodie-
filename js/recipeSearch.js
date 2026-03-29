// Logique de recherche et de normalisation sur les recettes (sans DOM).

// Normalise une chaîne pour comparaison (minuscules, trim)
export function normalize(s) {
  return s.trim().toLowerCase();
}

// Réduit un mot à sa racine en retirant le pluriel français (s/x final)
export function stem(s) {
  if (s.length > 3 && (s.endsWith("s") || s.endsWith("x"))) {
    return s.slice(0, -1);
  }
  return s;
}

// Vérifie si une recette correspond à la requête de recherche
// Version boucles natives : inspecte chaque champ avec un for, retour anticipé dès la première correspondance
export function recipeMatchesSearch(recipe, normalizedQuery) {
  if (!normalizedQuery) return true;

  if (normalize(recipe.name).includes(normalizedQuery)) return true;
  if (normalize(recipe.description).includes(normalizedQuery)) return true;

  for (let i = 0; i < recipe.ingredients.length; i++) {
    if (normalize(recipe.ingredients[i].ingredient).includes(normalizedQuery)) {
      return true;
    }
  }

  return false;
}
