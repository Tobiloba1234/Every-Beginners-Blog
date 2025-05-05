let menuContent = document.querySelector('.fa-bars')
console.log(menuContent)
menuContent.addEventListener('click',showMenuItems)

function showMenuItems(){
let menuItem = document.querySelectorAll('.menu-item')
 menuItem.forEach(item=>{
    console.log(item)
    item.classList.toggle('show')

    // item.style.border='2px solid #beabe2'
 })    
  
  
    
}