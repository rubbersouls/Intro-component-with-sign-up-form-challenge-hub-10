const btn = document.querySelector(".btn");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const errortext = document.querySelector(".errortext");
const inputerroremail = document.querySelector(".inputerroremail");

function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
}


btn.addEventListener("click", () => {

/* récupére valeur input*/

  var inputfristname = document.querySelector(".input-frist-name").value;
  var inputlastname = document.querySelector(".input-last-name").value;
  var inputemail = document.querySelector(".input-email").value;
  var inputpassword = document.querySelector(".input-password").value;


/* Détection vide Frist name */


if( !inputfristname.replace(/\s+/, '').length ){
    one.classList.add("error");
} 

/* Détection vide Last name */

if( !inputlastname.replace(/\s+/, '').length ){
    two.classList.add("error");

} 

/* Détection email non valide */

if (checkEmail(inputemail)) {
    } else {
          three.classList.add("error");
}           

/* Détection vide password*/
 
if( !inputpassword.replace(/\s+/, '').length ){
    four.classList.add("error");
} 

})

/* supprime l'erreur*/

one.addEventListener("click", () => {
  one.classList.remove("error")
})

two.addEventListener("click", () => {
  two.classList.remove("error")
})

three.addEventListener("click", () => {
  three.classList.remove("error")
  
})

four.addEventListener("click", () => {
  four.classList.remove("error")
})















