(function () {
    // Array of category short names
    var categoryShortNames = ["L", "D", "A", "S", "B"];

    // Function to generate a random category short name
    function getRandomCategoryShortName() {
        var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
        return categoryShortNames[randomIndex];
    }

    // Function to handle click event on Specials tile
    function specialsTileClickHandler(event) {
        event.preventDefault();
        var randomCategoryShortName = getRandomCategoryShortName();
        // Redirect to a dynamic URL based on the random category short name
        window.location.href = "menu.html?category=" + randomCategoryShortName;
    }

    // Bind click event to the Specials tile
    var specialsTile = document.getElementById("specials-tile");
    specialsTile.addEventListener("click", specialsTileClickHandler);

})();
