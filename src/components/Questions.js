import React,{useState, useEffect, useRef} from 'react'

const Questions=({data, ActiveQuestions, onAnswerupdate,numberofQuestions, onSetActiveQuestions,onSetStep })=> {
    const radiowrapper=useRef();
    const[select,setSelect]=useState("")
    const[error,setError]=useState("")
    
    useEffect(()=>{
        const findCheckedInput=radiowrapper.current.querySelector('input:checked');
        if(findCheckedInput){
            findCheckedInput.checked=false;
        }

    },[data])

    const changeHandler=(e)=>{
        setSelect(e.target.value)
        if(error){
            setError('');
        }
    }
    const nextClickHandler=(e)=>{
      if(select === ""){
          return setError("please select oe option");
      }
      onAnswerupdate(prevState=>[...prevState,{q:data.Question, a: select}]);
      setSelect('');
      if(ActiveQuestions< numberofQuestions-1){
          onSetActiveQuestions(ActiveQuestions+1);
      }else{
          onSetStep(3);
      }
    
    }
  return (
    <div className="card">
       <div className="card-content">
           <div className='content'>
               <h2 className='mb-5'>{data.Question}</h2>
               <div className='control' ref={radiowrapper}>
                {data.Choices.map((Choice,i) =>(
                  <label className='radio background-light' key={i}>
                    <input type="radio" name="answer" value={Choice} onChange={changeHandler} />
                    {Choice}
                  </label>         
                ))}
               </div>
               {error && <div className='text-danger'>{error}</div>}
               <button className='btn btn-info container'
               onClick={nextClickHandler}>Next</button>
           </div>
        </div>
    </div>
  )
}
export default Questions
