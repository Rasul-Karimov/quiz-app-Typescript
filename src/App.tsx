import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './components/QuestionCart';
import { RootType } from './redux/reducer';
import { questionTypes } from './redux/types';
import "./app.scss"
function App() {
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const questions = useSelector<RootType, questionTypes[]>(state => state)
  const [number, setNumber] = useState<number>(0);
  const [showNext, setShowNext] = useState<boolean>(true)
  const [right, setRight] = useState<boolean>(false)

  function handleClickNext() {
    if (number + 1 < questions.length) {
      console.log(number, questions.length)
      setNumber(number => number + 1)
      setRight(false)
    } else {
      console.log("stop")
      setShowNext(false)
    }
  }
  function handleClickStart() {
    setRightAnswers(0)
    setNumber(0)
    setShowNext(true)
    setRight(false)
  }
  return (

    <div className="App">
      <div className="quiz container">

        ``
        <img className='quiz__ibg' src="" alt="" />
        <h1 className='quiz__title'>React QUIZ</h1>
        <button onClick={handleClickStart} className='quiz__start'>Start</button>
        <p className='quiz__score'>Score: {!showNext && rightAnswers}</p>
        {
          showNext ?
            (<><QuestionCard right={right} setRight={setRight} question={questions[number].question} answers={questions[number].answers} questionNumber={number + 1} totalQuestions={questions.length} rightAnswer={questions[number].rightAnswer} setRightAnswers={setRightAnswers} /><button onClick={handleClickNext} className='next'>Next</button> </>) : null
        }


      </div>
    </div>
  );
}

export default App;
