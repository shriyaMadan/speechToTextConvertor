let btn = document.querySelector(".talk");
let content = document.querySelector(".content");
const greetings = ["how are you bae", "I am good", "I'm good and you look awesome today"];
const weather = ["Its awesome outside", "Weather is wild, take care you lil kiddo"];
const beauty = [ "Yes you are, I love you kiddo!"];

try{
  const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = function() {
    console.log("voice is activated and you are now connected to Microphone");
  }

  recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
  }

  btn.addEventListener('click',()=>{
    recognition.start();
  });

  function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you just said';
    if(message.includes("how are you")){
      const finalText = greetings[Math.floor(Math.random()*greetings.length)];
      speech.text = finalText;
    }
    if(message.includes("weather")){
      const finalText = weather[Math.floor(Math.random()*weather.length)];
      speech.text = finalText;
    }

    if(message.includes("beautiful")){
      const finalText = beauty[Math.floor(Math.random()*beauty.length)];
      speech.text = finalText;
    }
    //speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

}

catch(e){

}
