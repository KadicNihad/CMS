let articleId =null;
function openDeleteModal (id) {
    articleId = id;

}
function deleteArticle () {

    const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
    const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';

    if (!articleId) return;

    fetch(`${apiUrl}?id=${articleId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
    }).then(data => {
        document.getElementById('message').innerText='Delete Successfully';
        document.getElementById('message').style.color='green';
        document.getElementById(articleId).remove();
    }).catch(error => {
        document.getElementById('message').innerText=error;
        document.getElementById('message').style.color='red';

    }).finally(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteArticleModal'));
        modal.hide();
    });
}