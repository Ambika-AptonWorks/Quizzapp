import React,{useEffect, useState} from 'react'

const End=({data, results, onReset, onAnswerscheck, time})=> {
    const[correctAns,setCorrectAns]=useState(0);
    useEffect(()=>{
       let correct=0;
       results.forEach((result,index)=> {
           if(result.a === data[index].Answer){
               correct++;
           }  
       }); 
        setCorrectAns (correct);
    },[]);
  return (
    <div className='card'>
        <div className='card-content container'>
            <div className='content'>
                <h1>your Result</h1>
                <p>{correctAns}of{data.length}</p>
                <p><strong>{Math.floor((correctAns/data.length) *100)}%</strong></p>
                <p><strong>your time:</strong>2 minutes</p>
                <button id="btn" className='btn btn-info mr-2' onClick={onAnswerscheck}>Check Answers</button>
                <button className='btn btn-success' onClick={onReset}>Try again!</button>
            </div>
        </div>
    </div>
  )
}
export default End
