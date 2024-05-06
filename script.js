
var portfolios = JSON.parse(localStorage.getItem('portfolios')) || {};

window.onload = function() {
    console.debug('Slideenter animationn');
    document.getElementById('container').classList.add('slide-in');
};


document.getElementById('image').addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();
  
    reader.addEventListener('load', function () {
      const image = document.createElement('img');
      image.src = reader.result;
        image.style.maxWidth = '200px';
      image.style.maxHeight = '200px';
  
    
      const previewSection = document.getElementById('preview-section');
      previewSection.innerHTML = ''; 
      previewSection.appendChild(image);
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  });


function generateRandomID() {
    return Math.floor(Math.random() * 1000000/100);
}


function submitForm() {
    var name = document.getElementById('name').value;
    var image = document.getElementById('image').files[0];
    var about = document.getElementById('about').value;
    var age = document.getElementById('age').value;
    var skills = document.getElementById('skills').value;
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
                    phonenum: phonenum,
                    skills: skills
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
                phonenum: phonenum,
                skills: skills
            };
            localStorage.setItem('portfolios', JSON.stringify(portfolios));
        }
    }

    window.location.href = 'portfolio.html?id=' + id;
}
