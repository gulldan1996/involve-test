import React from "react";
import "./SuccessPage.scss";
import successImg from "../../img/success.png";
import { Link, Redirect } from "react-router-dom";

const SuccessPage = ({ success }) => {
  return (
    <>
      {success !== null ? (
        <div className="card-success">
          <div className="card-success__img">
            <img src={successImg} alt="success" />
          </div>
          <h2 className="card-success__title">
            {success.message !== "Success" ? "Error" : "Success!"}
          </h2>
          <p className="card-success__text">
            {success.message !== "Success"
              ? success.message
              : "Your exchange order has been placed successfully and will be processedsoon."}
          </p>
          <Link to="/Home">
            <button className="card-success__btn">Home</button>
          </Link>
        </div>
      ) : (
        <Redirect to="/Home" />
      )}
    </>
  );
};

export default SuccessPage;
