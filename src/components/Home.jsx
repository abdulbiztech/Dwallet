import React from "react";
import dwallet from "../assets/Logo_Decentrawood.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={dwallet} alt="logo" className="frontPageLogo" />
        <h2> Hey There 👋 </h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>
        <Button
          onClick={() => navigate("/createAccount")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recoverAccount")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Find more :{" "}
          <a href="https://decentrawood.com/" target="_blank" rel="noreferrer">
            Decentrawood
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
