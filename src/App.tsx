import './App.css'
import { Front } from './components/Front'
import { Back } from './components/Back'
import { InputCard } from './components/InputCard'
import { useEffect, useState } from 'react';

export interface Message {
  type: string;
  data: {
    word: string;
    phonetic: string;
    meaning: string;
    partOfSpeech: string;
    vietnameseDefinition: string | null;
    level: string | null;
    exampleSentence: string | null;
    phraseCollocation: string | null;
    originalText: string | null;
    showAnswer: boolean;
  }
}

function App() {
  const [message, setMessage] = useState<Message | null>(null);

  const onRecievedMessage = (event: MessageEvent) => {
    console.log('Received message from parent:', event.data);
    if (event.data && event.data.type === 'ok') {
      console.log('Received data from parent:', event.data);
      setMessage(event.data);
    }
  };

  useEffect(function () {
    
    console.log('Sent heartbeat to parent.');
    window.parent.postMessage({ type: 'heartbeat', data: message }, '*');
    
    window.addEventListener("message", onRecievedMessage);

    return function () {
      window.removeEventListener("message", onRecievedMessage);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {
        message ?
        <>
          <Front data={message ? message.data : {
            word: '',
            phonetic: '',
            meaning: '',
            partOfSpeech: '',
            vietnameseDefinition: null,
            level: null,
            exampleSentence: null,
            phraseCollocation: null,
            originalText: null,
            showAnswer: false,
          }} />
          <InputCard />
          {message?.data.showAnswer && <Back />}
        </>
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default App
