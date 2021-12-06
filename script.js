
// new speech recognition object
texts=document.querySelector('.texts');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {

};

recognition.onspeechend = function() {
    // when user is done speaking
    document.querySelector('.blink').style.display='none';
    recognition.stop();
}

// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    // for checking the events
    // console.log(event);
    // console.log(event.results);
    // console.log(event.results);
    // console.log(event.results[0][0].transcript.length);
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    p=document.createElement('p');
    p.classList.add('p');
    p.innerText=transcript;
    texts.appendChild(p);
};

// start recognition
recognition.start();