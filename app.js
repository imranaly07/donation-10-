let menuIcon = document.getElementById('menuIcon');
let navlist = document.querySelector('.navlist');

let flag = false;

document.addEventListener('DOMContentLoaded', function() {

    menuIcon.addEventListener('click', function() {
        flag = !flag; // Toggle the flag

        if (flag) {
            navlist.classList.add('show');
            // menuIcon.src = "images/close.png";
        } else {
            navlist.classList.remove('show');
            // menuIcon.src = "images/menu.png";
        }
    });

});
// ...........loderStarts..........




const words = ['𝕨𝕖𝕝𝕔𝕠𝕞𝕖','𝕋𝕠','ｄ𝐎ℕ𝐀𝓣𝔦ØⓃ', '𝟙⊘', '𝕗𝕠𝕦𝕟𝕕𝕒𝕥𝕚𝕠𝕟'];
let wordIndex = 0;

function animateText() {
  const loadingText = document.querySelector('.loading-text');
  loadingText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

document.addEventListener('DOMContentLoaded', function() {
  setInterval(animateText, 1000);
  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('#contents').style.display = 'block';
  },11000); // Change the delay (in milliseconds) as needed
  document.body.classList.add('loaded');
});




// .........loderEnds.............










// emergency


let emergency = document.querySelector('.Emergency');
let isRed = false;

setInterval(() => {
    if (isRed) {
        emergency.style.backgroundColor = ""; // Set it back to default (which is usually transparent)
    } else {
        emergency.style.backgroundColor = "red";
    }
    isRed = !isRed; // Toggle the state
}, 100);


//close emergency



let close=document.getElementById('close');

close.addEventListener('click',function () {

    emergency.remove()
    
})




















// Select the volunteer and donated amount elements
const volunteerElement = document.querySelector('.Volunteer h3');
const donatedAmountElement = document.querySelector('.donated h3');

// Set the start and end values for volunteer count and donated amount
const volunteerStartValue = 0;
const volunteerEndValue = 1000; // Assuming 2 volunteers
const donatedStartValue = 0;
const donatedEndValue = 3000; // 3 million

// Set the duration of the animation in milliseconds
const duration = 1000000; // 3 seconds

// Calculate the increment values based on the duration
const volunteerIncrement = Math.ceil(volunteerEndValue / (duration / 16));
const donatedIncrement = Math.ceil(donatedEndValue / (duration / 16));

// Start the animation
let currentVolunteerValue = volunteerStartValue;
let currentDonatedValue = donatedStartValue;

const interval = setInterval(() => {
  currentVolunteerValue += volunteerIncrement;
  currentDonatedValue += donatedIncrement;

  // Update the volunteer count element with the current value
  volunteerElement.textContent = currentVolunteerValue.toLocaleString();

  // Update the donated amount element with the current value
  donatedAmountElement.textContent = currentDonatedValue.toLocaleString();

  // Check if the end values have been reached
  if (currentVolunteerValue >= volunteerEndValue && currentDonatedValue >= donatedEndValue) {
    // Stop the animation
    clearInterval(interval);

    // Set the final values
    volunteerElement.textContent = volunteerEndValue.toLocaleString();
    donatedAmountElement.textContent = donatedEndValue.toLocaleString();
  }
}, 16); // Run the animation loop approximately every 16ms for 60fps

















// ........impact of our work.......................













const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = localStorage.getItem('currentIndex') || 0;
const slideWidth = slides[0].clientWidth;

function goToSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
  localStorage.setItem('currentIndex', currentIndex);
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

setInterval(nextSlide, 2000); // Autoplay interval

goToSlide(currentIndex); // Initial position




// ............................//slider ends..........
// ........................................................................
// ..........................................................................


// ......contactuse............
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});







































