import './App.css';
import Start from './components/Start';
import Questions from './components/Questions';
import React,{useState,useEffect} from "react";
import quizdata from "./data/quizz.json";
import End from "./components/End";

let interval;

function App() {
  const [step,setStep]=useState(1)
  const[activeQuestions,setActiveQuestions]=useState(0)
  const [answers,setAnswers]=useState([]);
  const[time, setTime]=useState(0)

  useEffect(()=>{
    if(step === 3){
      clearInterval(interval);
    }
  },[step])

  const startQuizHandler=()=>{
    setStep(2);
    interval=setInterval(()=>{
      setTime(prevTime => prevTime+1)
    },1000);

  }
  const resetClickHandler=()=>{
    setActiveQuestions(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval=setInterval(()=>{
      setTime(prevTime=> prevTime+1)
    },1000);

  }
 return (
  <div className="App">
    {step ===1 && <Start onQuizzStart={startQuizHandler} />}
    {step ===2 &&<Questions
      data={quizdata.data[activeQuestions]}
      onAnswerupdate={setAnswers}
      numberofQuestions={quizdata.data.length}
      ActiveQuestions={activeQuestions}
      onSetActiveQuestions={setActiveQuestions}
      onSetStep={setStep}
    />}
    {step ===3 &&<End 
    results={answers}
    data={quizdata.data}
    onReset={resetClickHandler}
    onAnswerscheck={()=>{}}
    time={time} />}
  </div>
  );
}

export default App;
