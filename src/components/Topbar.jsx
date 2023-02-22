import React from "react";

import "./dataSet.js";
import { topBar } from "./dataSet.js";

export const Topbar = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        {topBar.map((data) => {
          return (
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex"
              key={data.title}
            >
              <i
                className={`${data.icon} text-light p-3 me-2 text-center display-5 bg-primary rounded-circle mt-2 py-2`}
                key={data.title}
              ></i>
              <p className="align-self-center my-2 me-5 fw-bold fs-6" style={{fontSize: "1vw"}} >
                {data.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
