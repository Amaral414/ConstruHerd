const formularioLogin = document.getElementById("formLogin");
const nomeDeUsuario = document.getElementById("nomeDeUsuarioLogin");
const senhaDeUsuario = document.getElementById("senhaDeUsuarioLogin");
const emailDeUsuario = document.getElementById("nomeDeUsuarioLogin");



formularioLogin.addEventListener('submit', function(event){
    event.preventDefault();
    
    console.log(senhaDeUsuario.value);
    console.log(nomeDeUsuario.value);
    console.log("bombou");

})



console.log("ai dentro?");












/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.botaoDrop')) {
      var dropdowns = document.getElementsByClassName("divConteudoDropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }