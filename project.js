const route = (event) => {

    event = event || window.event;
    event.preventDefault();
    console.log("Routing to:", event.target.href);
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/":"/index.html",
    "pages/videos.html": "/pages/videos.html",
    "pages/images.html": "/pages/images.html",
    "pages/about.html": "/pages/about.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    console.log("pathname:", path);
    console.log("Fetching route:", route);
    console.log("Routes:",route);
    
    if(route) {
        const html = await fetch(route).then((respond) => respond.text());
        document.getElementById("main-page").innerHTML = html;
        console.log(document.getElementById("main-page").innerHTML);
    } else {
        console.log('NOT OK')
    }
};

window.onpopstate = handleLocation;
window.route = route;

document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (query) {
        console.log(`Searching for: ${query}`);
        // Example: Redirect to a search results page or filter content dynamically
        window.location.href = `/reel-genius/search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term.");
    }
});

// Function to handle search results
const displaySearchResults = () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    if (query) {
        document.getElementById("searchQuery").textContent = `Results for "${query}":`;

        // Example: Mock data for search results
        const mockData = [
            { title: "Video 1", description: "Description for Video 1" },
            { title: "Video 2", description: "Description for Video 2" },
            { title: "Image 1", description: "Description for Image 1" },
        ];

        // Filter mock data based on the query
        const results = mockData.filter(item =>
            item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
        );

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ""; // Clear previous results

        if (results.length > 0) {
            results.forEach(result => {
                const resultCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${result.title}</h5>
                                <p class="card-text">${result.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                resultsContainer.innerHTML += resultCard;
            });
        } else {
            resultsContainer.innerHTML = `<p class="text-danger">No results found for "${query}".</p>`;
        }
    }
};

// Call the function if on the search results page
if (window.location.pathname.endsWith("search.html")) {
    displaySearchResults();
}

//Function to use Enter key to search
var input = document.getElementById("searchInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchButton").click();
  }
});