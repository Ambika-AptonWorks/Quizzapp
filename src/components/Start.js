import React from 'react'


const Start=({onQuizzStart})=> {
  return (
 <>
    <div className="card">
       <div className="card-content">
           <div className='content'>
               <h1>Start  the Quizz</h1>
               <p>Good Luck!</p>
               <button className='btn btn-success' onClick={onQuizzStart}>Start</button>

           </div>
        </div>
    </div>
 </>
  )
}
export default Start
