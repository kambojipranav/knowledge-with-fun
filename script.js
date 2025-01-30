document.getElementById('submitButton').addEventListener('click', function () {
    const number = document.getElementById('numberInput').value.trim();
    const factsContainer = document.getElementById('factsContainer');

    if (!number || isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

    factsContainer.innerText = 'Fetching fact...';

   fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(http://numbersapi.com/${number})}`)
    .then(response => response.json())
    .then(data => {
        factsContainer.innerText = data.contents;
    })
        .then(data => {
            factsContainer.innerText = data.contents ? data.contents : 'No fact found for this number.';
        })
        .catch(error => {
            console.error('Error fetching from NumbersAPI:', error);
            factsContainer.innerText = 'Failed to fetch the fact. Please try again later.';
        });
});

// Joke Functionality
document.getElementById('jokeButton').addEventListener('click', function () {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jokeContainer').innerText = data.joke || "Could not fetch a joke. Try again!";
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
            document.getElementById('jokeContainer').innerText = "Failed to fetch a joke. Please try again.";
        });
});
