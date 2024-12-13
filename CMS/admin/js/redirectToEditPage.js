export function redirectToEditPage(id) {
    localStorage.setItem("editArticleId", id);
    window.location.href = "editArticle.html";
}

window.redirectToEditPage = redirectToEditPage;
