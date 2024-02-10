import React, { useState } from "react";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
function CreateAccount({ setSeedPhrase, setWallet }) {
  const navigate = useNavigate();
  const [newSeedPhrase, setNewSeedPhrase] = useState(null);
  function generateWallet() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setNewSeedPhrase(mnemonic);
  }
  function setWalletAndMnemonic() {
    setSeedPhrase(newSeedPhrase);
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address);
  }
  const handleCardClick = () => {
    if (newSeedPhrase) {
      const textArea = document.createElement("textarea");

      textArea.value = newSeedPhrase;

      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand("copy");

      document.body.removeChild(textArea);

      alert("Text copied to clipboard!");
    }
  };
  return (
    <>
      <div className="content">
        <div className="mnemonic">
          <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
          <div>
            Once you generate the seed phrase, save it securely in order to
            recover your wallet in the future.
          </div>
        </div>
        <Button
          className="frontPageButton"
          type="primary"
          onClick={() => generateWallet()}
        >
          Generate Seed Phrase
        </Button>
        <Card
          className="seedPhraseContainer"
          onClick={handleCardClick}
          hoverable
        >
          {newSeedPhrase && (
            <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>
          )}
        </Card>
        <Button
          className="frontPageButton"
          type="default"
          onClick={() => setWalletAndMnemonic()}
        >
          Open Your New Wallet
        </Button>
        <p className="frontPageBottom" onClick={() => navigate("/")}>
          Back Home
        </p>
      </div>
    </>
  );
}
export default CreateAccount;
