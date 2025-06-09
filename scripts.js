/*
 JavaScript NÂO é java
  VARIAVEIS É UM PEDACINHO DE MEMORIA DO COMPUTADOR PRA GUARDAR O QUE EU QUISER
 VARIAVEIS SÃO DECLARADAS COM VAR, LET OU CONST 

  - Algoritmo (Receita de Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [x] Trocar a cor de fundo
        [ ] Trocar a imagem principal
        [ ] enviar na internet

    - Funções 
      - Pedacinhos de código QUE, só executam quando são chamados
*/

// document = HTML
// QuerySeclector -> Selecionar ou Puxar o que eu quero*/
// script.js

let circulo = document.querySelector(".circulo");
let imagem = document.querySelector(".Starbucks");


console.log(imagem.src);

function trocarCor(cor) {
      // Lógica para trocar a cor
      circulo.style.background = cor;
}
function trocarimagem(img) {
     imagem.src = img

}





