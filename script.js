function speak(word){
    let speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
}
