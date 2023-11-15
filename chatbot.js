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

newDiv.classList.add("chatbot")
chat.classList.add("chat")

newDiv.innerHTML = `
    <div class="chat-bubble">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
    </div>
`

chat.innerHTML = `
<div class="chat-box">
    <div class="chat-box-header">Chat Extension</div>
    <div class="chat-box-body" id="chatMessages"></div>
    <div class="chat-box-text">
        <input class="input_chat" type="text" placeholder="Type your message"/>
        <button class="send-button">Send</button>
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
        inputElement.value = '';
    }
})


const selectedOption = "Microsoft Paul - French (France)"
const synth = window.speechSynthesis;
document.body.appendChild(newDiv)
document.body.appendChild(chat)

