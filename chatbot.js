
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
        <div class="chat-box-header"></div>
        <div class="chat-box-body"></div>
        <div class="chat-box-text"></div>
    </div>
`

// Ajoutez le nouvel élément à la fin du corps de la page
newDiv.addEventListener("click",function(){
    newDiv.style = "display : none;"
    chat.style = "display : flex;"
})
document.body.appendChild(newDiv)
document.body.appendChild(chat)
