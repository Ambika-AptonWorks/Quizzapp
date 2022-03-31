import React from 'react';

const Checkanswers = ({ results, data }) => {
  return(
    <div className="modal" tabIndex="-1">
    <div className="modal-dialog" >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Your Answers</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
        </div>
        <div className="modal-body">
          <ul>
            {results.map((result,i)=>(
              <li key={i}>
                  <p><strong>{result.q}</strong></p>
                  <p className={result.a === data[i].amswer ? 'background-success':'background-danger'}>Your answer:{result.a}</p>
                  {result.a !==data[i].answer && <p className='text-white'>correct answer:{data[i].answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Checkanswers;