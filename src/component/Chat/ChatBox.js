import React, { useState, useRef, useEffect } from 'react';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';

const ChatBox = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const getAutoReply = (userInput, yourData) => {
    const lowerCaseInput = userInput.toLowerCase();
    const userWords = lowerCaseInput.split(/[ ,.]+/); 

    let bestMatch = { question: '', answer: 'I am a bot! Feel free to ask me anything.', matchCount: 0 };

    yourData.forEach((dataItem) => {
      const dataWords = dataItem.question.toLowerCase().split(/[ ,.]+/);
      const matchCount = userWords.filter(word => dataWords.includes(word)).length;

      if (matchCount > bestMatch.matchCount) {
        bestMatch = { ...dataItem, matchCount };
      }
    });

    return bestMatch.answer;
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const userMessage = { text: userInput, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const autoReply = await getAutoReply(userInput, yourData);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: ` ${autoReply}`, isUser: false },
      ]);
    }, 500);

    setUserInput('');
  };

  return (
    <div className='p-4 pt-8'>
    <div className=" bg-white shadow-md p-2 ">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Chat with Us</h2>

      <div className="h-[30rem] overflow-y-scroll border-b-2 border-gray-300" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-center mb-2 ${message.isUser ? 'justify-end' : 'justify-start'
              }`}
          >
            <div
              className={`p-3 rounded-lg ${message.isUser
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-300 text-gray-800 self-start'
                }`}
            >
              {message.isUser ? <UserOutlined /> : <RobotOutlined />} {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded-l border-t border-b border-l border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default ChatBox;




const yourData = [
  { question: 'hello', answer: 'Hello there!' },
  { question: 'hi', answer: 'Hello, Well-come To ExploricNepic , How can i help you!' },
  { question: 'Verish Nepal', answer: 'Verisk Nepal is an IT company based in Pulchowk, Lalitpur, and a subsidiary of Verisk Analytics. It provides software development, data analytics, and IT support for global industries like insurance and financial services.' },
  { question: 'how are you', answer: 'i\m fine . thank you ! and what about you ? ' },
  { question: 'weather', answer: 'The weather is currently sunny!' },
  { question: 'time', answer: `The current time is ${new Date().toLocaleTimeString()}` },
  { question: 'how do you do', answer: 'I am doing well, thank you!' },
  { question: 'what is your name', answer: 'I am ChatBot, your virtual assistant!' },
  { question: 'tell me a joke', answer: 'Why don\'t scientists trust atoms? Because they make up everything!' },
  { question: 'another joke', answer: 'i love you , is jock for you because i expect better HAHA '  },
  { question: 'i love you', answer: 'Thank you for asking ! and i love you too' },
  { question: 'do you like pizza', answer: 'I am just a bot, but if I could eat, I would probably love pizza!' },
  { question: 'where are you from', answer: 'I was created by developers and reside in the digital world!' },
  { question: 'tell me about yourself', answer: 'I am ChatBot, here to assist you with any questions or tasks you have!' },
  { question: 'how do you do', answer: 'I am doing well, thank you!' },
  { question: 'can you dance', answer: 'I can\'t physically dance, but I can certainly help you find information about dancing!' },
  { question: 'tell me a fun fact', answer: 'Bananas are berries, but strawberries aren\'t!' },
  { question: 'what do you do', answer: 'I am a chatbot designed to assist and provide information.' },
  { question: 'time', answer: `The current time is ${new Date().toLocaleTimeString()}` },
  { question: 'weather', answer: 'The weather is sunny today.' },
  { question: 'location', answer: 'We are located in New York City.' },
  { question: 'Who is balen sah ?', answer: 'Balendra Shah is a Nepalese rapper, musician, structural engineer, and politician .' },
  { question: 'purpose', answer: 'Our purpose is to provide excellent customer service.' },
  { question: 'services', answer: 'We offer a wide range of services, including consulting, development, and support.' },
  { question: 'contact', answer: 'You can contact us at example@example.com or +123456789.' },
  { question: 'products', answer: 'We have various products available, including electronics, clothing, and accessories.' },
  { question: 'team', answer: 'Our team consists of experienced professionals dedicated to serving our customers.' },
  { question: 'pricing', answer: 'Our pricing depends on the services and products you choose. Please contact us for more information.' },
  { question: 'feedback', answer: 'We appreciate your feedback and strive to improve based on your suggestions. Please feel free to share your thoughts with us.' },
  { question: 'k gardai xau ?', answer: 'Ma Chatbot ho , Ma talai sanga kura garna banaiyeko hu, tapai ko sewa ma tatpar . kehi thap jigayasa vaye apthayaro namani sodhanu hola . ' },
  { question: 'who is Verisk Nepal ?', answer: 'Verisk Nepal is the software development and information technology service support center for Verisk Analytics.' },
  { question: '', answer: '' },
];











