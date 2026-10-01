function filterRecipes(category) {

    const cards = document.querySelectorAll(".recipe-card");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


function searchRecipes() {

    const searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".recipe-card");

    cards.forEach(card => {

        const recipeName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (recipeName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


function showRecipe(recipeName) {

    alert(
        "Recipe: " + recipeName +
        "\n\nIngredients and preparation instructions will be displayed here."
    );

}
