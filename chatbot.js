function sendMessage() {
    var inputElement = document.querySelector('.input_chat');
    var message = inputElement.value.trim();

    if (message !== '') {
        var chatMessages = document.getElementById('chatMessages');
        var messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        inputElement.value = '';
    }
}
// Créez un élément div
var newDiv = document.createElement("div")
var chat = document.createElement("div")
const logo = chrome.extension.getURL('Logo.png');

newDiv.classList.add("chatbot")
chat.classList.add("chat")

newDiv.innerHTML = `
    <div class="chat-bubble">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
    </div>
`

chat.innerHTML = `
<div class="chat-box">
    <div class="chat-box-header"><img src="${logo}" alt="Logo de l'extension PerfectBot" class="chat-logo">
        <div class="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 352 512">
            <path fill="currentColor" d="M265.7 256l85.7-85.7c9.4-9.4 9.4-24.6 0-34s-24.6-9.4-34 0L224 221.7 138.3 136c-9.4-9.4-24.6-9.4-34 0s-9.4 24.6 0 34L190.3 256 104 341.7c-9.4 9.4-9.4 24.6 0 34s24.6 9.4 34 0L224 290.3 309.7 375c9.4 9.4 24.6 9.4 34 0s9.4-24.6 0-34L265.7 256z"/>
        </svg>
    </div>
    </div>
    <div class="chat-box-body" id="chatMessages"></div>
    <div class="chat-box-text">
    <button id="btn-play" type="button" class="audio" title="Start">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
    </button>
    <button id="btn-pause" type="button" class="audio"  hidden="true" title="Pause">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
    </button>
        <input class="input_chat" id="input_chat" type="text" placeholder="Type your message"/>
        <button class="send-button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></button>
    </div>
</div>
`

// Ajoutez le nouvel élément à la fin du corps de la page
newDiv.addEventListener("click", function () {
    newDiv.style = "display : none;"
    chat.style = "display : flex;"
})

var sendButton = chat.querySelector('.send-button');
sendButton.addEventListener("click", function () {
    var inputElement = document.querySelector('.input_chat');
    var message = inputElement.value.trim();

    if (message !== '') {
        var chatMessages = document.getElementById('chatMessages');
        var messageDiv = document.createElement('div');
        var messageP = document.createElement('p');
        var messageBut = document.createElement('button');
        messageP.textContent = message;
        messageBut.value = message;
        messageBut.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
        messageBut.addEventListener("click",function(){
                const utterThis = new SpeechSynthesisUtterance(messageBut.value);
                utterThis.pitch = 1;
                utterThis.rate = 1;
                synth.speak(utterThis);
              
        })
        messageDiv.classList.add("messageDiv");
        messageDiv.appendChild(messageP);
        messageDiv.appendChild(messageBut);
        chatMessages.appendChild(messageDiv);

        var messageDivbot = document.createElement('div');
        var messagePbot = document.createElement('p');
        var messageButbot = document.createElement('button');
        messagePbot.textContent = "je suis en cours de développement";
        messageButbot.value = "je suis en cours de développement";
        messageButbot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
        messageButbot.addEventListener("click",function(){
                const utterThis = new SpeechSynthesisUtterance(messageButbot.value);
                utterThis.pitch = 1;
                utterThis.rate = 1;
                synth.speak(utterThis);
              
        })
        messageDivbot.classList.add("chatbot-message");
        messageDivbot.appendChild(messagePbot);
        messageDivbot.appendChild(messageButbot);
        chatMessages.appendChild(messageDivbot);
        
        inputElement.value = '';
    }
})
var closeButton = chat.querySelector('.close-button')
closeButton.addEventListener("click", function () {
    newDiv.style = "display : flex;"
    chat.style = "display : none;"
})

const selectedOption = "Microsoft Paul - French (France)"
const synth = window.speechSynthesis;
document.body.appendChild(newDiv)
document.body.appendChild(chat)

var audioButtonPlay = document.getElementById("btn-play");
var audioButtonPause = document.getElementById("btn-pause");
audioButtonPlay.addEventListener("click", function () {
    tspSocket.grantPermission('fr-FR');
            document.getElementById('btn-play').hidden = true;
            document.getElementById('btn-pause').hidden = false;
        })
        console.log("salut");
audioButtonPause.addEventListener("click", function () {        
    tspSocket.stopRecording();

    document.getElementById('btn-play').hidden = false;
    document.getElementById('btn-pause').hidden = true;
})

var tspSocket = (function () {
    return {
        grantPermission: function (lang) {
            grantPermissionF(lang);
        },
        stopRecording: function () {
            stopRecordingF();
        },
        sendText: function () {
            sendRecording();
        }
    }
})(tspSocket || {})

var recognizing;

function reset() {
    recognizing = false;
    speech.start();
}

var speech = new webkitSpeechRecognition() || speechRecognition();
speech.continuous = false;
speech.interimResults = true;

function grantPermissionF(lang) {
    try {
        speech.lang = lang;
        speech.start();
    } catch (error) {
        reset();
    }
};

function stopRecordingF() {
    recognizing = false;
    speech.stop();
};

function sendRecording() {
    // send 'to_send_transcript' to API/ Backend
    to_send_transcript = '';
}

speech.onstart = function () {
    // When recognition begins
    recognizing = true;
};

var to_send_transcript = '';
speech.onresult = function (event) {

    // When recognition produces result
    var interim_transcript = '';
    var final_transcript = '';

    // main for loop for final and interim results
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
            document.getElementById('input_chat').value = '';
            to_send_transcript += ' ' + final_transcript;

            if (document.getElementById('input_chat').value.length >= 300) {
                document.getElementById('input_chat').value = final_transcript + ' ';
                
                sendRecording(final_transcript); // send stream of speech to API/ backend (optional)
            }
            else {
                document.getElementById('input_chat').value += final_transcript + ' ';
            }
        } else {
            interim_transcript += event.results[i][0].transcript;
            document.getElementById('input_chat').value = interim_transcript
        }
    }
};

speech.onerror = function (event) {
    // Either 'No-speech' or 'Network connection error'
    speech.stop();
};

speech.onend = function () {
    // When recognition ends
    if (recognizing) {
        reset();
    }
};