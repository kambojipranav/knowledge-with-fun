document.getElementById('submitButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value.trim();
    const factsContainer = document.getElementById('factsContainer');
    
    if (!number || isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }
    
    factsContainer.innerText = 'Fetching fact...';
    
    fetch(`http://numbersapi.com/${number}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch from NumbersAPI');
            }
            return response.text();
        })
        .then(fact => {
            factsContainer.innerText = fact;
        })
        .catch(error => {
            console.error('Error fetching from NumbersAPI:', error);
            
            // Fallback to Math.tools API
            fetch(`https://api.math.tools/numbers/fact?number=${number}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch from Math.tools API');
                    }
                    return response.json();
                })
                .then(data => {
                    factsContainer.innerText = data.contents.fact || 'No fact available for this number.';
                })
                .catch(error => {
                    console.error('Error fetching from Math.tools API:', error);
                    factsContainer.innerText = 'Failed to fetch the fact. Please try again later.';
                });
        });
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
