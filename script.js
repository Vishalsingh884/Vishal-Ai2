document.getElementById("ask-btn").addEventListener("click", async () => {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  // Add user question to the chat
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div>User: ${userInput}</div>`;

  // Clear the input field
  document.getElementById("user-input").value = "";

  // Call AI API (we will use OpenAI API here)
  const answer = await getAIAnswer(userInput);

  // Display AI response
  chatBox.innerHTML += `<div>AI: ${answer}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
});

async function getAIAnswer(question) {
  // Here you will need to call an AI API like OpenAI
  // For now, we will just simulate a response
  return "This is a simulated AI answer!";
}
