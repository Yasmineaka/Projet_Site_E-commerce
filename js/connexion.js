let e_mail = document.querySelector("#e_mail")
let mot_de_pass = document.querySelector("#mot_de_pass")
let connexion = document.querySelector("#inscription")


// console.log( email, mot_de_pass, connexion)
connexion.addEventListener('click', function() {
    let Entrer_E_mail =  localStorage.getItem("e_mail")
    let  Entrer_Mot_De_pass = localStorage.getItem("mot_de_pass")
    
  if((E_mail.value === Entrer_E_mail.value) && (mot_de_pass === Entrer_Mot_De_pass)){
    window.location.href = '/Users/imac-09/Desktop/E-COMMERCE_project.github.io/html/accueil.html'
  }
})
