document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById("dog-breeds-list");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                dogBreedsList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching dog breeds:", error));
});
