import React from 'react';

const Checkanswers = ({ onClose, results, data }) => {
  return(
    <div className="modal" tabIndex="-1">
    <div className='modal-background' onClick={onClose}></div>
    <div className="modal-dialog" >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Your Answers</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <ul>
            {results.map((result, index)=>(
              <li key={index}>
                  <p><strong>{result.q}</strong></p>
                  <p className={result.a === data[index].Answer ? 'background-success':'background-danger'}>Your answer:{result.a}</p>
                  {result.a !== data[index].Answer && <p className='text-white'>correct answer:{data[index].Answer}</p>}
              </li>
            ))};
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Checkanswers;