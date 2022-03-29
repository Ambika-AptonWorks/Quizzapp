import React,{useState, useEffect, useRef} from 'react'

const Questions=({})=> {
    const nextClickHandler=(e)=>{

    }
  return (
    <div className="card">
       <div className="card-content">
           <div className='content'>
               <h2 className='mb-5'>Questions here</h2>
               <div className='control'>
                   <label className='radio background-light'>
                       <input type="radio" name="answer" value="" onChange={()=>{}} />
                       Choice text here
                   </label>
               </div>
               <div className='text-danger'>error here</div>
               <button className='btn btn-info container'
               onClick={nextClickHandler}>Next</button>
           </div>
        </div>
    </div>
  )
}
export default Questions
