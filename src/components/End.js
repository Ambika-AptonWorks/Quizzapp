import React,{useEffect, useState,useRef} from 'react'
import { formatTime } from './Time';
import { useReactToPrint } from 'react-to-print';


const End=({data, results, onReset, onAnswerscheck, time})=> {
 const componentRef=useRef()
 const handlePrint=useReactToPrint({
   content:() => componentRef.current,
  });
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
    <>
    <div className='card' ref={componentRef}>
        <div className='card-content'>
            <div className='content'>
                <h1>Your Result</h1>
                <p>{correctAns} of {data.length}</p>
                <p><strong>{Math.floor((correctAns/data.length) *100)}%</strong></p>
                <p><strong>your time:</strong>{formatTime(time)}</p>
                
                <button className='btn btn-success' onClick={onReset}>Try again!</button>
            </div>
            <button className='btn btn-warning container'onClick={handlePrint}>Print</button>
        </div>
    </div>
  </>
  )
}
export default End
