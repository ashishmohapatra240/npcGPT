# npGPT - Game Character Conversations

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

1. Clone the repository to your local machine:

```
git clone https://github.com/ashishmohapatra240/npcGPT
```


2. Navigate to the cloned repository.

```cd npcGPT```

3. Install the required dependencies

4. Set your OpenAI API key in .env file

5. Run the api, and then then write a json payload in the format:


`
{
  "question": "Where is Nux?"
}
`

5. The output will be generated and returned

![1](https://github.com/ashishmohapatra240/npcGPT/assets/78657461/49757a3e-b500-4ff1-80b4-b8f318aeec2d)
![2](https://github.com/ashishmohapatra240/npcGPT/assets/78657461/60d15f18-8631-4cec-b451-61604f2878a0)




---

Elevate your gaming experience with the ChatGPT model, generating real-life conversations between the user and the game character. Enjoy immersive dialogues that enhance your gameplay!
