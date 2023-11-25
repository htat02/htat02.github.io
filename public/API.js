document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        // Create a div for each post and add a class for styling
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        // Populate the div with post details
        postCard.innerHTML = `
          <h2>${post.title}</h2>
          <p><strong>User ID:</strong> ${post.userId}</p>
          <p>${post.body}</p>
        `;

        // Append the post card to the posts container
        postsContainer.appendChild(postCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
