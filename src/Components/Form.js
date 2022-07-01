import React, { useEffect, useState } from "react";
import Start from "./Start";
import Questions from "./Questions";
import End from "./End";
import Modal from "./Modal";
import quizData from './data/quiz.json'
let interval;
const Form=(props)=>
{
    const [step,setStep]=useState(1);
  const [activeQuestion,setActiveQuestion]=useState(0);
  const [answers,setAnswers]=useState([]);
  const [showModal,setShowModal]=useState(false);
  const [time,setTime]=useState(0);
  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }
  
    return(
      <>
      
        <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.handleChange}
            value={props.currentCourse}/>
            <button type="submit">Add Course</button>
        </form>
        <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Questions
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  

        </>
    )
}
export default Form;