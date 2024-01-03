import React, { useState } from 'react';
import './App.css';

function Main() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const userMessage = inputText.trim().toLowerCase();
    setMessages([...messages, { type: 'user', text: userMessage }]);
    handleBotResponse(userMessage);
    setInputText('');
  };

  const handleBotResponse = (userMessage) => {
    const botResponses = {
      'what is sciastra?': 'SciAstra is a platform for...',
      'how to get started?': 'To get started, visit our website',
      'contact information?': 'You can reach us at support@sciastra.com',
      'How secure is SciAstra platform?': 'SciAstra prioritizes security and employs industry-standard encryption protocols to ensure the safety of user data.',
      'Can I integrate SciAstra with other third-party tools':'Yes, SciAstra provides APIs and documentation for seamless integration with various third-party tools.',
      ' What features does SciAstra offer for collaboration':'SciAstra offers features like real-time collaboration, version control, and project management tools for effective teamwork.',
     'How can I reset my password on SciAstra?' :'You can reset your password by visiting the login page.',
     'What programming languages are supported by SciAstra?':'A: SciAstra supports range of languages, including but not limited to Python, JavaScript, and Java.',
     'Can I customize the appearance of my SciAstra dashboard?':'SciAstra allows users to customize their dashboard appearance, providing flexibility in layout and design.',
     'Is SciAstra suitable for small-scale projects or only for large enterprises':'SciAstra is designed to cater to both small-scale projects and large enterprises, providing scalability and flexibility'
    };

    const botResponse = botResponses[userMessage] || "I'm sorry, I didn't understand that.";

    setMessages([...messages, { type: 'bot', text: botResponse }]);
  };

  const predefinedQuestions = [
    'what is sciastra?',
    'how to get started?',
    'contact information?',
    'How secure is SciAstra platform?',
    'Can I integrate SciAstra with other third-party tools',
    'What features does SciAstra offer for collaboration',
'How can I reset my password on SciAstra?',
'What programming languages are supported by SciAstra?',
'Can I customize the appearance of my SciAstra dashboard?',
'Is SciAstra suitable for small-scale projects or only for large enterprises?'

  ];

  return (
    <div className='parent'>
      <div className='child'>
        <div>
          {predefinedQuestions.map((question) => (
            <p key={question} className='predefined-question'>
              <b>SciAstra Bot:</b> {question}
            </p>
          ))}
        </div>
        {messages.map((message, index) => (
          <p key={index} className={message.type === 'bot' ? 'bot-message' : 'user-message'}>
            <b>{message.type === 'bot' ? 'SciAstra Bot:' : 'You:'}</b> {message.text}
          </p>
        ))}
        <form onSubmit={handleSendMessage}>
          <input
            type='text'
            onChange={handleInputChange}
            value={inputText}
            className='inputt'
            placeholder='Type your message...'
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
