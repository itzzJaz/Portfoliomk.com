// Load portfolios from localStorage
var portfolios = JSON.parse(localStorage.getItem('portfolios')) || {};
// After the page loads, add the slide-in class to trigger the animation
window.onload = function() {
    console.debug('Slideenter animationn');
    document.getElementById('container').classList.add('slide-in');
};

// Generate a random ID
function generateRandomID() {
    return Math.floor(Math.random() * 1000000);
}

// Function to submit the form
function submitForm() {
    

    var name = document.getElementById('name').value;
    
    var about = document.getElementById('about').value;
    var age = document.getElementById('age').value;
    var achievements = document.getElementById('achievements').value;
    var hobbies = document.getElementById('hobbies').value;
    var creations = document.getElementById('creations').value;
    var inventions = document.getElementById('inventions').value;
    var aspirations = document.getElementById('aspirations').value;
    var id = document.getElementById('id').value;

    // Validate input
    if (!id) {
        id = generateRandomID();
        document.getElementById('id').value = id; // Set the generated ID in the hidden input field

        portfolios[id] = {
            name: name,
            age: age,
            achievements: achievements,
            about: about,
            hobbies: hobbies,
            creations: creations,
            inventions: inventions,
            aspirations: aspirations
        };
        localStorage.setItem('portfolios', JSON.stringify(portfolios));
    }

    // Redirect to portfolio.html with ID as query parameter
    window.location.href = 'portfolio.html?id=' + id;
}

