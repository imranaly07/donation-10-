let menuIcon=document.getElementById('menuIcon');
let navlist=document.querySelector('.navlist')

let flag=0;

document.addEventListener('DOMContentLoaded',function(){
    
    menuIcon.addEventListener('click',function () {

        if (flag===0) {
            navlist.classList.add('show')
           menuIcon.src="images/close.png"
            flag=1;
            
        }

        else{
            navlist.classList.remove('show')
            menuIcon.src="images/menu.png"
           
            flag=0;
        }

     
        
    })
})












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
const duration = 3000; // 3 seconds

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

















// ........impact of our work


const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
   
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });