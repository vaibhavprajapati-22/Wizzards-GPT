function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    addMessage('user', userMessage);

    // Send userMessage to the server for processing with GPT and document handling.
    // Receive a response from the server and add it to the chat history.
    // You'll need server-side code for this part.

    // For demonstration purposes, let's assume a simple response from the server:
    const response = "Here is the response to your query from the document.";

    addMessage('bot', response);
  }

  function addMessage(sender, message) {
    const chatHistory = document.getElementById('chat-history');
    const messageContainer = document.createElement('div');
    messageContainer.className = sender + '-message';
    messageContainer.innerHTML = message;
    chatHistory.appendChild(messageContainer);

    // Scroll to the bottom of the chat history
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }