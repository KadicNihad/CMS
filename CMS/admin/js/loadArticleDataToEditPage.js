 window.onload = function loadingArticleDataInEditPage() {
    const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
    const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';

    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (!articleId) {
        document.getElementById('message').innerText = 'ID not found';
        document.getElementById('message').style.color='red';
        return;
    }

    fetch(`${apiUrl}?id=${articleId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${bearerToken}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(article => {
            document.getElementById("title").value = article.title;
            document.getElementById("pictureUrl").value = article.picture;
            document.getElementById("description").value = article.description;
        })
        .catch(error => {
            document.getElementById('message').innerText = error;
            document.getElementById('message').style.color='red';
        });
}
