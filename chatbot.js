
// Créez un élément div
var newDiv = document.createElement("div")
newDiv.classList.add("chatbot")
newDiv.innerHTML = `
    <h1>Mon Extension</h1>
    <p>Ce contenu a été ajouté par mon extension.</p>
`

// Ajoutez le nouvel élément à la fin du corps de la page
document.body.appendChild(newDiv)
