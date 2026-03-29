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
// Version fonctionnelle : construit un tableau des champs puis utilise Array.some
export function recipeMatchesSearch(recipe, normalizedQuery) {
  if (!normalizedQuery) return true;
  const fields = [
    recipe.name,
    recipe.description,
    ...recipe.ingredients.map((i) => i.ingredient),
  ];
  return fields.some((field) => normalize(field).includes(normalizedQuery));
}
