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
// Function to submit the form
function submitForm() {
    var name = document.getElementById('name').value;
    var image = document.getElementById('image').files[0];
    var about = document.getElementById('about').value;
    var age = document.getElementById('age').value;
    var achievements = document.getElementById('achievements').value;
    var hobbies = document.getElementById('hobbies').value;
    var creations = document.getElementById('creations').value;
    var inventions = document.getElementById('inventions').value;
    var aspirations = document.getElementById('aspirations').value;
    var email = document.getElementById('email').value;
    var phonenum = document.getElementById('phonenumber').value;
    var id = document.getElementById('id').value;

    if (!id) {
        id = generateRandomID();
        document.getElementById('id').value = id;

        // Convert image to base64 string for storage if an image is provided
        var imageData = null;
        if (image) {
            var reader = new FileReader();
            reader.onload = function(event) {
                imageData = event.target.result;

                portfolios[id] = {
                    name: name,
                    image: imageData,
                    age: age,
                    achievements: achievements,
                    about: about,
                    hobbies: hobbies,
                    creations: creations,
                    inventions: inventions,
                    aspirations: aspirations,
                    email: email,
                    phonenum: phonenum

                };
                localStorage.setItem('portfolios', JSON.stringify(portfolios));
            };
            reader.readAsDataURL(image);
        } else {
            // If no image provided, store other details without the image
            portfolios[id] = {
                name: name,
                age: age,
                achievements: achievements,
                about: about,
                hobbies: hobbies,
                creations: creations,
                inventions: inventions,
                aspirations: aspirations,
                email: email,
                phonenum: phonenum
            };
            localStorage.setItem('portfolios', JSON.stringify(portfolios));
        }
    }

    window.location.href = 'portfolio.html?id=' + id;
}
