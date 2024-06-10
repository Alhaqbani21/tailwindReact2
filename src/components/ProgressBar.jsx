import React from 'react';

function ProgressBar() {
  return (
    <div className="flex items-center justify-center my-10">
      <ul className="steps">
        <li className="step step-primary">Trailer</li>
        <li className="step step-primary">Cinema</li>
        <li className="step">Buy ticket</li>
        <li className="step">Enjoy</li>
      </ul>
    </div>
  );
}

export default ProgressBar;
