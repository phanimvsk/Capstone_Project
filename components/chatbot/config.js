import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from "./DogPicture.js";

const config = {
    botName: "AI_TUITOR_BOT",
    initialMessages: [createChatBotMessage("Hi learner!, I'm here to help. What do you want to learn?")],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
        chatContainer:{
            width:800
        }
    },
   
}

export default config