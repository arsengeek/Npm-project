
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3001/posts');
        const data = await response.json();

        displayPosts(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function displayPosts(posts) {
    const appDiv = document.getElementById('app');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        appDiv.appendChild(postDiv);
    });
}


fetchData();
