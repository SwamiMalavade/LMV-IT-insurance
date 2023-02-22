import React from "react";

export const Card = (props) => {
  return (
    <div className="card shadow mx-3 mt-5">
      <img
        src={props.img}
        className="card-img-top p-2"
        alt="Image not Found"
        style={{ height: "50%" }}
      />
      {props.title && (
        <div className="card-body">
          <h5 className="card-title ms-2 text-start">{props.title}</h5>
          <p className="card-text ms-3 text-start">{props.desc}</p>
          <button
            className="btn rounded-pill align-align-self-start border"
            id="btn-card"
          >
            {props.btn}
          </button>
        </div>
      )}
    </div>
  );
};
