function createArticle () {
        const title = document.getElementById('title').value;
        const pictureUrl = document.getElementById('pictureUrl').value;
        const description = document.getElementById('description').value;

        if(!title || !pictureUrl || !description) {
            console.log('Please check your inputs');
        }else {
            if(title.length <3 || title.length > 70) {
                    document.getElementById('titleErrorMessage').innerText = "Title mora imati minimalno 3 a makssimalno 70 karaktera" ;
                    document.getElementById('title').className= ' form-control border-danger';

            }else if (description.length <3 || description.length > 500){
                document.getElementById('titleErrorMessage').innerText = "" ;
                document.getElementById('title').className= 'form-control';
                document.getElementById('descriptionErrorMessage').innerText = "Description mora imati minimalno 3 a makssimalno 500 karaktera" ;
                document.getElementById('description').className= ' form-control border-danger';
            }else {
                document.getElementById('titleErrorMessage').innerText = "" ;
                document.getElementById('title').className= ' form-control';

                const bearerToken = 'FsRRUFsYboQjJSHAdAouTQPWvHCCIOagwcbAOTFL';
                const apiUrl = 'https://api.webbytechexpert.com/devTest/api.php';

                const jsonData = {
                    title: title,
                    picture: pictureUrl,
                    description: description
                };

                fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${bearerToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonData)
                }).then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                }).then(data => {
                    console.log("Created Successfully", jsonData);
                }).catch(error => {
                    console.log("Created Error", error)
                });
                window.location.href='index.html';
            }
        }


}
