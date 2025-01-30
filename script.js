// Number Facts Functionality
document.getElementById('submitButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    if (number) {
        // Fetch fact from NumbersAPI (primary)
        fetch(`https://numbersapi.com/${number}?json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch from NumbersAPI');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('factsContainer').innerText = data.text;
            })
            .catch(error => {
                console.error('Error fetching from NumbersAPI:', error);
                // Fallback to Math.tools API if NumbersAPI fails
                fetch(`https://api.math.tools/numbers/fact?number=${number}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch from Math.tools API');
                        }
                        return response.json();
                    })
                    .then(data => {
                        document.getElementById('factsContainer').innerText = data.contents.fact;
                    })
                    .catch(error => {
                        console.error('Error fetching from Math.tools API:', error);
                        document.getElementById('factsContainer').innerText = "Failed to fetch the fact. Please try again.";
                    });
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
