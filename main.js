function searchTools() {

    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase().trim();

    const toolCards = document.querySelectorAll(".tool-card");

    toolCards.forEach(card => {

        const toolName =
            card.getAttribute("data-name").toLowerCase();

        if (toolName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}