 function loadArticleDataToEditPage() {
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
            document.getElementById("title").value = article.title;
            document.getElementById("pictureUrl").value = article.picture;
            document.getElementById("description").value = article.description;
        })
        .catch(error => {
            console.error("Error loading article data:", error);
        });
}
window.onload = loadArticleDataToEditPage();