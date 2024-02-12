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