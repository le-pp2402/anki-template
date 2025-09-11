import './App.css'
import { Front } from './components/Front'
import { Back } from './components/Back'
import { InputCard } from './components/InputCard'
import { useEffect, useState } from 'react';
import { stripHtml } from './utils/stripHtml';

export type Message = {
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
  const [isParentReceived, setIsParentReceived] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const onRecievedMessage = (event: MessageEvent) => {
    if (event.data && event.data.type === 'ok') {
      const rawData = event.data;

      for (const key in rawData.data) {
        if (typeof rawData.data[key] === 'string') {
          rawData.data[key] = stripHtml(rawData.data[key]);
        }
      }
      setMessage(rawData);
      setIsParentReceived(true);
      console.log(userAnswer);
    }
  };

  useEffect(function () {
    const interval = setInterval(() => {
      window.parent.postMessage({ type: 'heartbeat', data: message }, '*');
      console.log('Sent heartbeat to parent.');
      if (isParentReceived) {
        clearInterval(interval);
      }
    }, 2000, [isParentReceived]);

    window.addEventListener("message", onRecievedMessage);
  });

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
            <InputCard word={message.data.word} setUserAnswer={setUserAnswer} />
            {message?.data.showAnswer && <Back data={message.data} />}
          </>
          :
          <p>Loading...</p>
      }
    </div>
  )
}

export default App
