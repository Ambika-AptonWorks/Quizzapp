import React from 'react'


const Start=({onQuizzStart})=> {
  return (
 <>
    <div className="card" id="card1">
       <div className="card-content">
           <div className='content'>
               <h1>Start  the Quizz</h1>
               <p>Good Luck!</p>
               <button className='btn btn-success' onClick={onQuizzStart}>Start </button>

           </div>
        </div>
    </div> 
 </>
  )
}
export default Start
