function cakes(recipe, available) {
    const recipeNames = Object.keys(recipe);
    const availableNames = Object.keys(available);
    let cakes = Infinity;
    for (let i = 0; i < recipeNames.length; i++) {
        const ingredient = recipeNames[i];
        if (!availableNames.includes(ingredient)) {
            return 0;
        }
        const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
        if (possibleCakes < cakes) {
            cakes = possibleCakes;
        }
    }

    return cakes;
}