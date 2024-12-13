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
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }).then(data => {
        console.log("Delete Successfully");
        window.reload;
    }).catch(error => {
        console.log("Created Error", error)
    }).finally(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteArticleModal'));
        modal.hide();
    });
}