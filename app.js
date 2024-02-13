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