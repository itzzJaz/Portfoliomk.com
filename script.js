
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
    var cass = document.getElementById('class') ? document.getElementById('class').value : null;
    var car = document.getElementById('car') ? document.getElementById('car').value : null;
    var edu = document.getElementById('education') ? document.getElementById('education').value : null;
    var ex = document.getElementById('expr') ? document.getElementById('expr').value : null;
    var adc = document.getElementById('adc') ? document.getElementById('adc').value : null
    var pas = document.getElementById('pas') ? document.getElementById('pas').value : null
   
    
    

    
    if (!id) {
        id = generateRandomID();
        document.getElementById('id').value = id;

       
        var imageData = null;
        if (image) {
            var reader = new FileReader();
            reader.onload = function(event) {
                 imageData = event.target.result;

                portfolios[id] = {
                    name: name,
                    age: age,
                    image: imageData,
                    achievements: achievements,
                    about: about,
                    hobbies: hobbies,
                    creations: creations,
                    inventions: inventions,
                    aspirations: aspirations,
                    email: email,
                    phonenum: phonenum,
                    skills: skills,
                    cass: cass,
                    car: car,
                    edu: edu,
                    ex: ex,
                    adc:adc,
                    pas:pas
                    
                };
                localStorage.setItem('portfolios', JSON.stringify(portfolios));
            };
            reader.readAsDataURL(image);
        } else {
            
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
                skills: skills,
                cass : cass,
                edu:edu,
                ex:ex,
                car: car,
                adc:adc,
                pas:pas
            };
            localStorage.setItem('portfolios', JSON.stringify(portfolios));
        }
    }

    window.location.href = 'portfolio.html?id=' + id;
}
function add(){

           
    var portfolioContent = '<button id = "cl" onclick="c()">Class</button>' ;
    portfolioContent+= '<br>';
    portfolioContent+= '<button id="car" onclick="f()">Career</button>' ;
    portfolioContent+= '<br>';
    portfolioContent+= '<button id = "edu" onclick="d()">Education</button>' ;
    portfolioContent+= '<br>';
    portfolioContent+= '<button id = "ex" onclick="g()">Experience</button>' ;
    portfolioContent+= '<br>';
    portfolioContent+= '<button id = "pa" onclick="p()">Professional Associations</button>';
    portfolioContent+= '<br>';
    portfolioContent+= '<button id = "Adi" onclick="a()">Additional Contact Information</button>';
    
      
        var labelContainer = document.getElementById('lb');
    labelContainer.innerHTML = ''; 
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    
    
    }
    function c(){
    var label = "Class"
    var portfolioContent = '<div class="input-field" id="id-field">' ;
    portfolioContent += '<p><strong>'+label+'</p>';
    
    portfolioContent+= '<textarea id="class" rows="1"></textarea>'
        portfolioContent += '</div>';
    
        var labelContainer = document.getElementById('lb1');
    labelContainer.innerHTML = ''; 
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    
    
    }
    function f(){
    var label = "Career"
    var portfolioContent = '<div class="input-field" id="id-field">' ;
    portfolioContent += '<p><strong>'+label+'</p>';
    
    portfolioContent+= '<textarea id="car" rows="4"></textarea>'
        portfolioContent += '</div>';
    
        var labelContainer = document.getElementById('lb2');
    labelContainer.innerHTML = ''; 
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    
    
    }
    function d(){
    var label = "Education"
    var portfolioContent = '<div class="input-field" id="id-field">' ;
    portfolioContent += '<p><strong>'+label+'</p>';
    
    portfolioContent+= '<textarea id="education" rows="1"></textarea>'
        portfolioContent += '</div>';
    
        var labelContainer = document.getElementById('lb3');
    labelContainer.innerHTML = ''; 
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    
    
    }
    function g(){
    var label = "Experience"
    var portfolioContent = '<div class="input-field" id="id-field">' ;
    portfolioContent += '<p><strong>'+label+'</p>';
    
    portfolioContent+= '<textarea id="expr" rows="4"></textarea>'
        portfolioContent += '</div>';
    
        var labelContainer = document.getElementById('lb4');
    labelContainer.innerHTML = ''; 
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    
    
    }
    function a(){
    var label = "Additional Contact Information"
    var portfolioContent = '<div class="input-field" id="id-field">' ;
    portfolioContent += '<p><strong>'+label+'</p>';
    
    portfolioContent+= '<textarea id="adc" rows="4"></textarea>'
        portfolioContent += '</div>';
        var labelContainer = document.getElementById('lb5');
        labelContainer.innerHTML = '';
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    }
    function p(){
    var label = "Professional Associations"
    var portfolioContent = '<div class="input-field" id="id-field">' ;
    portfolioContent += '<p><strong>'+label+'</p>';
    
    portfolioContent+= '<textarea id="pas" rows="4"></textarea>'
        portfolioContent += '</div>';
        var labelContainer = document.getElementById('lb6');
        labelContainer.innerHTML = ''; 
    labelContainer.insertAdjacentHTML('beforeend', portfolioContent);
    }