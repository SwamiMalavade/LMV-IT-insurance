import React from "react";

import "./dataSet.js";
import "./style.css";

import { brandImg, cardData, insuranceData } from "./dataSet.js";
import { Card } from "./Card.jsx";

export const Home = () => {
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row align-self-center py-5 ">
          <div className="col-12 col-lg-6 align-self-center">
            <img
              src="assets/img/home-1.png"
              alt="IMAGE NOT FOUND"
              style={{ width: "80%" }}
            />
          </div>

          <div className="col-12 col-lg-6 align-self-center mt-3">
            <h1 className="fw-bold">
              "Insurance is not a luxury, <br /> it is a necessity."
            </h1>
            <h1 className="fw-bold mt-4 py-4">Find The Best Policy Here!</h1>
            <button className="btn btn-primary rounded-pill mt-4 fs-5">
              Know More..
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 bg-body-secondary pb-4">
        <div className="container mt-5 py-5 position-relative">
          <div className="row">
            {insuranceData.map((data) => {
              return (
                <div className="col-12 col-lg-3" key={data.title}>
                  <h3 className="ms-4">{data.title}</h3>
                  {data.list.map((li) => {
                    return (
                      <ul
                        id="list-decoration"
                        className="text-decoration-none"
                        key={li}
                      >
                        <li>{li}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <img
            src="assets/img/page-2.png"
            alt="IMAGE NOT FOUND"
            style={{ width: "30%" }}
            className="position-absolute bottom-0 end-0"
          />
        </div>
      </div>

      <div className="container py-5 text-center">
        <h1 className="btn btn-primary m-3 rounded-pill align-self-center fs-3 mb-4 px-5">
          WHY CHOOSE US?
        </h1>
        <div className="row">
          {cardData.map((card) => {
            return (
              <div className="col-12 col-lg-4" key={card.title}>
                <Card
                  img={card.img}
                  title={card.title}
                  btn={card.btn}
                  desc={card.desc}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid mt-5 bg-body-secondary pb-4">
        <div className="container mt-5 py-5 text-center">
          <a className="btn btn-primary m-3 rounded-pill fs-3 mb-5 px-5">
            Our Major Brands
          </a>
          <div className="container text-center">
            <div className="row row-cols-3">
              {brandImg.map((img) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={img}>
                    <img
                      src={img}
                      alt="IMAGE NOT FOUND"
                      className="mt-4 shadow rounded-3 p-3"
                      style={{ width: "90%", height: "65%" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 py-5">
        <div className="row align-self-center py-5 ">
          <div className="col-12 col-lg-4">
            <h1 className="fw-bold">
              Have A Question? <br /> Here To Help
            </h1>
            <p className="mt-4 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              id dignissimos, inventore sed, accusamus vel et animi voluptas
              rerum voluptatem praesentium magnam itaque ad eos necessitatibus
              cupiditate possimus quis quam laudantium quae facilis? Quo
              laboriosam molestias minus alias laudantium dolorem.
            </p>

            <div className="container text-center">
              <div className="row row-cols-1">
                <div className="col rounded-3 fs-3 fw-bold" id="border-style">
                  General Enquiries <br />
                  www.imvgroup.com
                </div>
                <div
                  className="col rounded-3 mt-3 fs-3 fw-bold"
                  id="border-style"
                >
                  Contact Info <br />
                  040-454-6523
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8 mt-3">
            <img
              src="assets/img/home-1.png"
              alt="IMAGE NOT FOUND"
              className="float-end"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="container text-light">
          <h2 className="py-3">About Us</h2>
          <div className="row">
            {insuranceData.map((data) => {
              return (
                <div className="col-12 col-lg-2 " key={data.title}>
                  <h3 className="ms-4">{data.title}</h3>
                  {data.list.map((li) => {
                    return (
                      <ul id="list-decoration" key={li}>
                        <li>{li}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Ipsam architecto facere natus libero error, necessitatibus
              minima eius numquam dolore excepturi, maiores, <br />
              eum obcaecati deserunt eos repudiandae? Illo, illum recusandae
              provident incidunt veritatis ratione vero! Repudiandae deserunt
              qui, exercitationem dolor veritatis, voluptatem beatae .<br />{" "}
              provident commodi, alias numquam quisquam quos adipisci quam
              repudiandae? Illo, illum recusandae provident incidunt veritatis
              ratione vero! Repudiandae deserunt qui, exercitationem dolor
              veritatis, voluptatem beatae provident commodi, alias numquam
              quisquam quos adipisci quam.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid" style={{ backgroundColor: "#606c6a" }}>
          <div className="d-flex justify-content-around">
            <a href="/" className="text-decoration-none text-light">
              www.imvgroup.com
            </a>
            <div>
              <i className="bi bi-facebook text-light me-2"></i>
              <i className="bi bi-twitter text-light me-2"></i>
              <i className="bi bi-linkedin text-light me-2"></i>
              <i className="bi bi-instagram text-light"></i>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center justify-content-center bg-dark text-light">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            dolores qui perspiciatis minus incidunt voluptatem repellat eligendi
            iusto dignissimos nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, unde
            laboriosam ratione porro corrupti quae incidunt optio nemo. Deserunt
            accusamus dignissimos consequatur animi repellendus deleniti unde
            facilis laborum commodi, rerum aliquam distinctio ipsa at cupiditate
            libero sunt culpa perspiciatis voluptatem.
          </p>
        </div>
      </footer>
    </>
  );
};
