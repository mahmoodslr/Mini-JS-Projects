const apikey = '9b72db38d4264c95b500722fdcbf17d0';

const blogContainer = document.getElementById('blog-container');
const searchFild = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

async function fetchRandomNews() {
    blogContainer.innerHTML = '<p>Loading news...</p>';
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
};

searchButton.addEventListener("click", async () => {
    const query = searchFild.value.trim()
    if (query !== '') {
        try {
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);
        } catch (error) {
            console.error("Error fetching news by query", error);
        }
    }
});

async function fetchNewsQuery(query) {
    blogContainer.innerHTML = '<p>Searching news...</p>';
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
};

function displayBlogs(articles) {
    blogContainer.innerHTML = '';
    if (!articles || articles.length === 0) {
        blogContainer.innerHTML = '<p>No news articles found. Try another search.</p>';
        return;
    }
    articles.forEach((articles) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = articles.urlToImage || "https://placehold.co/600x400";
        img.alt = articles.title || "No title available";

        const title = document.createElement("h2");
        truncatedTitle = articles.title.length > 30 ? articles.title.slice(0, 30) + "..." : articles.title || "No title available";
        title.textContent = truncatedTitle;

        const description = document.createElement("p");
        const truncatedDes = articles.description.length > 120 ? articles.description.slice(0, 120) + "..." : articles.description || "No description available";
        description.textContent = truncatedDes;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener("click", () => {
            window.open(articles.url, "_blank")
        });
        blogContainer.appendChild(blogCard);
    })
};

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();