const botao = document.getElementById('mensagemBtn');
const mensagem = document.getElementById('mensagem');

let visivel = false;

botao.addEventListener('click', function() {
  if (!visivel) {
    mensagem.innerText = "Hello, Uninter!";
    visivel = true;
  } else {
    mensagem.innerText = "";
    visivel = false;
  }
});
