const _btn = document.getElementById('btn');

_btn.onclick = () => {
    let _txt = document.getElementById('text').value;
    let _speech = new SpeechSynthesisUtterance();
    _speech.lang = 'hi';
    _speech.text = _txt;
    _speech.rate = 1;
    _speech.volume = 1;
    _speech.pitch = 1;

    speechSynthesis.speak(_speech);
}