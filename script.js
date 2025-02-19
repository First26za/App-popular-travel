document.addEventListener("DOMContentLoaded", function () {
    const places = [
        "Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Ayutthaya", "Krabi",
        "Hua Hin", "Kanchanaburi", "Samui", "Chiang Rai", "Koh Tao",
        "Koh Lipe", "Pai", "Sukhothai", "Nakhon Ratchasima", "Trang",
        "Paris", "London", "New York", "Tokyo", "Seoul", "Sydney",
        "Rome", "Venice", "Dubai", "Barcelona", "Moscow", "Istanbul",
        "Rio de Janeiro", "Santorini", "Bali", "Kyoto", "Singapore",
        "Los Angeles", "Las Vegas", "Berlin", "Amsterdam", "Prague",
        "Hong Kong", "Shanghai", "Toronto", "Buenos Aires", "Cape Town",
        "Cairo", "Athens", "Zurich", "Osaka"
    ];

    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = "";

        if (query) {
            const filteredPlaces = places.filter(place =>
                place.toLowerCase().includes(query)
            );

            if (filteredPlaces.length === 0) {
                resultsContainer.innerHTML = "<div class='result-item'>No results found</div>";
            } else {
                filteredPlaces.forEach(place => {
                    const div = document.createElement("div");
                    div.classList.add("result-item");
                    div.textContent = place;
                    div.addEventListener("click", function () {
                        // เปิด Google Search ค้นหารีวิวของสถานที่นั้น
                        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(place)}+review`;
                        window.open(searchUrl, "_blank");
                        searchInput.value = place;
                        resultsContainer.innerHTML = "";
                    });
                    resultsContainer.appendChild(div);
                });
            }
        }
    });

    // ซ่อนผลลัพธ์เมื่อคลิกข้างนอก
    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
            resultsContainer.innerHTML = "";
        }
    });
});
