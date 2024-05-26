// main.js

document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.querySelector(".btn-outline-secondary");
    const historyDiv = document.getElementById("history");

    sendButton.addEventListener("click", function() {
        const message = messageInput.value;
        if (message.trim() !== "") {
            // Criar elemento para exibir a mensagem do usuário
            const userMessageElement = document.createElement("div");
            userMessageElement.classList.add("message", "user-message");
            userMessageElement.innerHTML = `<span class="message-sender">Você:</span> ${message}`;
            historyDiv.appendChild(userMessageElement);

            // Limpar o valor da caixa de entrada
            messageInput.value = "";
        }
    });
});
