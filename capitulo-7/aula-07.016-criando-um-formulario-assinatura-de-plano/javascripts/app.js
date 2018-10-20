/** alert('Ola'); **/

/** var alternador = document.querySelector('.botao-chaveador'); **/
var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function() {
  /** alert('clicou no botao'); **/
	var menu = document.querySelector('.js-menu');  
	menu.classList.toggle('menu--exibindo');
}
