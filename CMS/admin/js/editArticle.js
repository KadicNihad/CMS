function editArticle() {
    const title = document.getElementById('title').value;
    const pictureUrl = document.getElementById('pictureUrl').value;
    const description = document.getElementById('description').value;
    const message = document.getElementById('message');

    if (!title || !pictureUrl || !description) {
        message.innerText = 'Please check your inputs';
        message.style.color = 'red';
        return;
    }
    if (title.length < 3 || title.length > 70) {
        document.getElementById('titleErrorMessage').innerText = "Title mora imati minimalno 3 a makssimalno 70 karaktera";
        document.getElementById('title').className = ' form-control border-danger';
        return;

    }
    if (description.length < 3 || description.length > 500) {
        document.getElementById('titleErrorMessage').innerText = "";
        document.getElementById('title').className = 'form-control';
        document.getElementById('descriptionErrorMessage').innerText = "Description mora imati minimalno 3 a makssimalno 500 karaktera";
        document.getElementById('description').className = ' form-control border-danger';
        return;
    }
    const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
    const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    const jsonData = {
        title: title,
        picture: pictureUrl,
        description: description
    };

    fetch(`${apiUrl}?id=${articleId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    }).then(data => {
        message.innerText = 'Update Successfully';
        message.style.color = 'green';
        window.location.href = './index.html';
    }).catch(error => {
        message.innerText = error;
        message.style.color = 'red';
    });
}