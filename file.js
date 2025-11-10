let menu_links=document.querySelector('.menu-links');
const mobile_menu=document.querySelector('.fa-caret-down');
mobile_menu.addEventListener('click' , () => {
    menu_links.classList.toggle("menu-block"); 
    mobile_menu.classList.toggle("fa-sort-up"); 
});