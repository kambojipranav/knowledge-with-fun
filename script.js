// Number Facts Functionality
document.getElementById('submitButton').addEventListener('click', function() {
  const number = document.getElementById('numberInput').value;
  if (number) {
      fetch(`http://numbersapi.com/${number}?json`)
          .then(response => response.json())
          .then(data => {
              document.getElementById('factsContainer').innerText = data.text;
          })
          .catch(error => {
              console.error('Error fetching the number fact:', error);
          });
  } else {
      alert('Please enter a number.');
  }
});

// Joke Functionality
document.getElementById('jokeButton').addEventListener('click', function() {
  fetch('https://v2.jokeapi.dev/joke/Any?type=single') // Fetch a random joke
      .then(response => response.json())
      .then(data => {
          if (data.joke) {
              document.getElementById('jokeContainer').innerText = data.joke;
          } else {
              document.getElementById('jokeContainer').innerText = "Could not fetch a joke. Try again!";
          }
      })
      .catch(error => {
          console.error('Error fetching the joke:', error);
          document.getElementById('jokeContainer').innerText = "Failed to fetch a joke. Please try again.";
      });
});