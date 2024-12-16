let articleId =null;
function OnOpenDeleteModalClick (id) {
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
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteArticleModal'));
        modal.hide();

    }).catch(error => {
        document.getElementById('message').innerText=error;
        document.getElementById('message').style.color='red';

    });
}