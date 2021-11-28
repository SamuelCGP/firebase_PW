var currentPage = "listar";

var btnInserir = document.getElementById("btnInserir");
var btnListar = document.getElementById("btnListar");

btnInserir.addEventListener('click', changePage);
btnListar.addEventListener('click', listar);