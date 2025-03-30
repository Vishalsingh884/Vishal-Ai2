async function getAIAnswer(question) {
  const apiKey = process.env.OPENAI_API_KEY;  // Access the environment variable

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003", // You can choose other models if you want
      prompt: question,
      max_tokens: 150,
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  if (data.choices && data.choices.length > 0) {
    return data.choices[0].text.trim(); // Get the response from OpenAI
  } else {
    return "Sorry, I couldn't get an answer. Try again later!";
  }
}
