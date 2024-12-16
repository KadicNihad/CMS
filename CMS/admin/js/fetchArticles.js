window.onload = function fetchArticles() {
    const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
    const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';

    fetch(apiUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(articles => {
        const tableBody = document.getElementById("articlesTable").querySelector("tbody");
        tableBody.innerHTML = "";

        if (articles.length) {
            articles.forEach(article => {
                const row = document.createElement("tr");
                row.id = article.id;
                row.innerHTML = `
                <td>${article.id}</td>
                <td>${article.title}</td>
                <td>${article.picture}</td>
                <td>${article.createdAt}</td>
                <td>
                     <button type="button" class="btn btn-warning" onclick="openEditPage(${article.id})">Edit</button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" onclick="OnOpenDeleteModalClick(${article.id})" data-bs-target="#deleteArticleModal">Delete</button>
                </td>
                `;
                tableBody.appendChild(row);
            })
            return ;
        }
        document.getElementById('noArticle').style.display = 'block';
        document.getElementById('tableEmpty').style.display = 'none';

    }).catch(error => {
        document.getElementById('message').innerText= error;
    })
}

