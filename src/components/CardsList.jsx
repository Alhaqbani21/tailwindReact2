import React from 'react';
import img from '../assets/image.png';

function CardsList() {
  return (
    <div className=" my-5 flex flex-wrap gap-10 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            SpiderMan!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Watch the movie?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Movie</div>
            <div className="badge badge-outline">Action</div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            SpiderMan!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Watch the movie?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Movie</div>
            <div className="badge badge-outline">Action</div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            SpiderMan!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Watch the movie?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Movie</div>
            <div className="badge badge-outline">Action</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsList;
