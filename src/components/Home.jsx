import React, { useState } from "react";
import dwallet from "../assets/Logo_Decentrawood.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="content">
        <h2> Let's get started </h2>
        <p>
          Trusted by millions, MetaMask is a secure wallet making the world of
          web3 accessible to all.
        </p>
        <img src={dwallet} alt="logo" className="frontPageLogo" />

        {/* <h4 className="h4"> Welcome to your Web3 Wallet</h4> */}
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

        {/* <Button
          onClick={() => navigate("/createAccount")}
          className="button btn--rounded btn-primary"
          type="primary"
          disabled={!isChecked}
        >
          Create A Wallet
        </Button> */}
        <Button
          onClick={() => navigate("/createPassword")}
          className="button btn--rounded btn-primary"
          type="primary"
          disabled={!isChecked}
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recoverAccount")}
          className="button btn--rounded btn-primary"
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
