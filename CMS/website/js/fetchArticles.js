window.onload = function fetchArticles () {
    const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
    const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';

    fetch(apiUrl, {
        method:"GET",
        headers: {
            "Authorization": `Bearer ${bearerToken}`
        }
    }).then(response => {
        return response.json();
    }).then(articles => {
        const articleCard = document.getElementById("articleCard");
        articleCard.innerHTML = "";
        articles.forEach(article => {
            const card = document.createElement("div");
            card.className="col-12 col-md-6 col-lg-4 mb-4";
            card.innerHTML= `
               <div class="card h-100">
                    <a href=# onclick="onLinkClick(${article.id})" style="text-decoration-line: none">
                    <img src="${article.picture}" class="card-img-top" alt="${article.title}" style="height: 450px">
                    <div class="card-body">
                        <h5 class="card-title" ">${article.title}</h5>
                        </a>
                        <p class="card-text truncate-200">${article.description}</p>
                    </div>
               </div>
            `;
            articleCard.appendChild(card);
        })
    }).catch(error => {
        document.getElementById('message').innerText = error;
        document.getElementById('message').style.color='red';
    })
}