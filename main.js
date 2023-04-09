// 1. Código JS para fala em texto:
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 


// 2. defina a função de início e escreva o código para ela:
function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
// 3. Este resultado é a conversão de nossa fala em texto
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
    // adicione o código para verificar se o que dizemos foi “tire minha selfie”
}

// Escreveremos uma função speak() que realizará a conversão de texto para fala.


    

// Escreveremos o código para a funcionalidade da webcam no arquivo main.js, e adicionaremos o
// código da webcam após a função speak() 




// aula 100 - escreveremos o código para tirar uma selfie. Adicione este código após o código da webcam -> A função
// takeSelfie() será a nossa função takeSelfie()


// aula 100 -Já sabemos como escrever o código para um botão HTML e fornecê-lo uma função onclick.
// Vejamos a função setTimeOutButton:


// aula 100 - escreveremos o código para salvar a selfie tirada.
// Escreva o código para isso, após a função takeSelfie(