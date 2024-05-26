document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const history = document.getElementById('history');
    const sendButton = document.querySelector('.btn-outline-secondary');
  
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
        appendMessage(message, 'my-message');
        messageInput.value = '';
        // Simulate a response from the chat
        setTimeout(() => appendMessage('This is a response message', 'response-message'), 1000);
      }
    }
  
    function appendMessage(text, className) {
      const messageElement = document.createElement('div');
      messageElement.className = `box-${className}`;
      messageElement.innerHTML = `<div class="${className}">${text}</div>`;
      history.appendChild(messageElement);
      history.scrollTop = history.scrollHeight;
    }
  });
  