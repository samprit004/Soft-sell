const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 5000;

// Enable CORS for all domains
app.use(cors({
  origin: '*', // Allow all domains
}));

app.use(express.json());

const genAI = new GoogleGenerativeAI("AIzaSyDJ4DLnVBilagWOTS0u77lo0wuwcm32qTM");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    res.json({ reply: text });
  } catch (err) {
    console.error("Gemini Error:", err);
    res.status(500).json({ error: "Failed to get response from Gemini" });
  }
});

// Make the server listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server is running at http://0.0.0.0:${port}`);
});
