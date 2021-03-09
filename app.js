function imgslider(e){
 document.querySelector('.pepsi').src=e; 
}

function changebg(color){
const bg=document.querySelector('.sec');
bg.style.background=color;
}

function togglemenu(){
    const togglemenu=document.querySelector('.togglemenu');
    togglemenu.classList.toggle('active')
    const navigation=document.querySelector('.navigation');
    navigation.classList.toggle('active')
    
}