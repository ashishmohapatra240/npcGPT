const express = require('express');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/generate-response', async (req, res) => {
    const { question } = req.body;

    try {
        console.log('Received request with question:', question);

        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: `As the character of Chumbucket, answer the questions asked by Max within 60 words about ${question}?`,
            max_tokens: 60,
            temperature: 0.6
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        const answer = response.data.choices[0].text.trim();
        console.log('Generated answer:', answer);

        res.json({ answer });
    } catch (error) {
        console.error('Error occurred:', error.response.data.error.message);
        res.status(500).json({ error: 'An error occurred while generating the response.' });
    }
});

app.get("/", async function (req, res) {
    res.send("Reached home!");
});

app.listen(3000, () => {
    console.log('API server is running on port 3000');
});
