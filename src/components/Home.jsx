import React, { useState } from "react";
import dwallet from "../assets/Logo_Decentrawood.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    // console.log(isChecked);
  };
  return (
    <>
      <div className="content">
        <img src={dwallet} alt="logo" className="frontPageLogo" />
        <h2> Let's get started </h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>
        <div className="terms">
          <input
            type="checkbox"
            onClick={handleCheck}
            className="checkbox-term"
          />
          <label>
            I agree to Decentrawood{" "}
            <span className="agree-term">Terms of use</span>
          </label>
        </div>

        <Button
          onClick={() => navigate("/createAccount")}
          className="frontPageButton"
          type="primary"
          disabled={!isChecked}
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recoverAccount")}
          className="frontPageButton"
          type="default"
          disabled={!isChecked}
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Find more :{" "}
          <a
            href="https://decentrawood.com/"
            className="frontPageBottom-anchor"
            target="_blank"
            rel="noreferrer"
          >
            Decentrawood
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
