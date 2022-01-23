const btnMode = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

btnMode.addEventListener('click', changeMode);

function changeMode(){
   body.classList.toggle('dark-mode');
   btnMode.classList.toggle('dark-mode');
   h1.classList.toggle('dark-mode');
   footer.classList.toggle('dark-mode');

   if(btnMode.classList.contains('dark-mode')){
      btnMode.innerHTML = "Light Mode"
      h1.innerHTML = "Dark Mode ON"
   }else{
      btnMode.innerHTML = "Dark Mode"
      h1.innerHTML = "Light Mode ON"
   }
}