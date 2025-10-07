import './App.css'
import { Front } from './components/Front'
import { Back } from './components/Back'
import { InputCard } from './components/InputCard'
import { useEffect, useState } from 'react';
import { stripHtml } from './utils/stripHtml';
import { lcs } from './utils/lcs';

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
  }
}

function App() {
  const [message, setMessage] = useState<Message | null>(null);
  const [isParentReceived, setIsParentReceived] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [redIndexes, setRedIndexes] = useState<number[]>([]);

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
      if (isParentReceived) {
        clearInterval(interval);
      }
    }, 2000, [isParentReceived]);
    window.addEventListener("message", onRecievedMessage);
  });

  const showBackSide = () => {
    setShowAnswer(!showAnswer);
  }

  useEffect(() => {
    if (showAnswer) {
      const correctAnswer = message?.data.word || "";
      const lcsResult = lcs(userAnswer.toUpperCase(), correctAnswer.toUpperCase());
      const redIdxs: number[] = [];
      let uIdx = 0, cIdx = 0;
      for (const ch of lcsResult) {
        while (uIdx < userAnswer.length && userAnswer[uIdx].toUpperCase() !== ch) {
          redIdxs.push(uIdx);
          uIdx++;
        }
        uIdx++;
        while (cIdx < correctAnswer.length && correctAnswer[cIdx].toUpperCase() !== ch) {
          cIdx++;
        }
        cIdx++;
      }
      while (uIdx < userAnswer.length) {
        redIdxs.push(uIdx);
        uIdx++;
      }
      setAnswer(correctAnswer);
      setRedIndexes(redIdxs);
    }
  }, [showAnswer]);

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
            }} showAnswer={showAnswer} />
            <InputCard word={message.data.word} setUserAnswer={setUserAnswer} showBackSide={showBackSide} />
            {showAnswer && <Back data={message.data} redIndexes={redIndexes} answer={answer} />}
          </>
          :
          <p>Loading...</p>
      }
    </div>
  )
}

export default App
