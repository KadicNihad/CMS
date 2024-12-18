function viewArticle() {
    const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
    const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';

    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (!articleId) {
        console.error("No article ID found .");
        return;
    }

    fetch(`${apiUrl}?id=${articleId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${bearerToken}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(article => {
            const row = document.getElementById('row');

            row.innerHTML = `
                <img src=${article.picture} alt= ${article.title} style="height: 400px">
                <h1 class="text-center"> ${article.title} </h1>
                <p>${article.description}</p>
                
            `
        })
        .catch(error => {
            console.error("Error loading article data:", error);
        });
}
window.onload = viewArticle;