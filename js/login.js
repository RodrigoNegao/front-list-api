//
// Script do Login
//
link = "https://backlistapi.herokuapp.com"; //"http://localhost:3000"

//alert não é resevado mas da conflito com comando alert
var alert1 = document.getElementById("alert");
alert1.style.display = "none";

//console.log(users);
//var users = []; // lista de objetos{} - começava do Zero a lista Problema Corrigido

// verificar login e senha
function login() {
  let user_name = document.getElementById("user");
  let password = document.getElementById("password");
  axios
    .post(link + "/login", {
      name: user_name.value,
      password: password.value
    })
    .then((response) => {
      console.log(response.data.msg);
      location.href = './pages/lista_de_recados.html';
    })
    .catch((error) => {
      console.log(error.response.data.msg);
    });  
}
