document.addEventListener("DOMContentLoaded", function () {
    const fetchDataBtn = document.getElementById("fetchDataBtn");
    const dataContainer = document.getElementById("dataContainer");

    fetchDataBtn.addEventListener("click", fetchData);

    function fetchData() {
        // Replace the URL with the desired API endpoint
        const apiUrl = "https://jsonplaceholder.typicode.com/posts";

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the data on the web page
                displayData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function displayData(data) {
        // Clear previous data
        dataContainer.innerHTML = "";

        // Create a list to display the data
        const ul = document.createElement("ul");

        // Loop through the data and create list items
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            ul.appendChild(li);
        });

        // Append the list to the data container
        dataContainer.appendChild(ul);
    }
});
