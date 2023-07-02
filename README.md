# npGPT - Game Character Conversations (AI-Track)

This repository contains a ChatGPT model, 'npcGPT', that generates real-life conversations between the user and a game character. By leveraging prompt engineering techniques and variables, the model enhances the gaming experience by providing interactive and immersive dialogues. We use an example, Chumbucket  and Max are the characters of Mad Max where Max is the user and Chumbucket answers to all the queries and responses for a real end experience as the AI.

## Repository Structure

- *README.md*: The current file you are reading, which provides an overview of the repository and instructions on how to use the ChatGPT model.

## Conversations

The `data` directory contains a collection of text files representing various conversations between the user and the game character. These conversation files are designed to cover different aspects of the game and can be used to simulate in-game interactions. Each conversation file follows a specific format:

User: [User Prompt] Character: [Character's Response] 
User: [User Reply] Character: [Character's Response] ...


You can create new conversation files or modify existing ones to customize the interactions between the user and the game character, allowing for unique and engaging gameplay experiences.



## Usage

To use the ChatGPT model and enable conversations between the user and the game character, follow these steps:

Go to https://npcgpt.onrender.com/generate-response

1. Open the Postman on your computer.
2. Create a new request: Click on the "New" button in the top-left corner of the Postman window, then select "Request" from the dropdown menu.
3. Set the request method and URL: In the newly created request tab, select the HTTP method as "POST" and enter the API endpoint URL provided, which is "https://npcgpt.onrender.com/generate-response".
4. Set the request headers: Click on the "Headers" tab below the URL field and add a new header with the key "Content-Type" and the value "application/json".
5. Set the request body: Click on the "Body" tab below the URL field, select the "Raw" radio button, and choose "JSON" from the dropdown menu.
6. Enter the request payload in this format, feel free to ask your own question:
`{
  "question": "Where is Nux?"
}
`
7. Send the request: Click on the "Send" button located on the right side of the request URL field. Postman will send the request to the API endpoint.
8. Receive the response: The API will process the request and return a response. Postman will display the response in the main area of the application.

It will answer as Chumbucket from the game Mad Max. Ask things that are related to the game such as Wastelands, Scraps, and Jeet Territory to have better results.
   

![1](https://github.com/ashishmohapatra240/npcGPT/assets/78657461/49757a3e-b500-4ff1-80b4-b8f318aeec2d)
![2](https://github.com/ashishmohapatra240/npcGPT/assets/78657461/60d15f18-8631-4cec-b451-61604f2878a0)




---

Elevate your gaming experience with the ChatGPT model, generating real-life conversations between the user and the game character. Enjoy immersive dialogues that enhance your gameplay!
