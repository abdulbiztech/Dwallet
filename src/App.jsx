import "./App.css";
import { useState } from "react";
import logo from "./assets/Logo.png";
import { Select } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/createAccount";
import RecoverAccount from "./components/recoverAccount";
import CreatePassword from "./components/createPassword";

import WalletView from "./components/walletView";
function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <>
      <div className="main-container">
        <div className="onboarding-app-header">
          <div className="onboarding-app-header-content">
            <button className="header-logo-container">
              <img src={logo} alt="" />
              Decentrawood
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                English
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="App">
          {/* <header>
            <img src={logo} className="headerLogo" alt="logo" />
            <Select
              onChange={(val) => setSelectedChain(val)}
              value={selectedChain}
              options={[
                {
                  label: "Ethereum",
                  value: "0x1",
                },
                {
                  label: "Mumbai Testnet",
                  value: "0x13881",
                },
                {
                  label: "Polygon",
                  value: "0x89",
                },
                {
                  label: "Avalanche",
                  value: "0xa86a",
                },
              ]}
              className="dropdown"
            ></Select>
          </header> */}

          {wallet && seedPhrase ? (
            <Router>
              <Routes>
                <Route
                  path="/createAccount"
                  element={
                    <WalletView
                      wallet={wallet}
                      setWallet={setWallet}
                      seedPhrase={seedPhrase}
                      setSeedPhrase={setSeedPhrase}
                      selectedChain={selectedChain}
                    />
                  }
                />
                <Route
                  path="/createPassword"
                  element={
                    <WalletView
                      wallet={wallet}
                      setWallet={setWallet}
                      seedPhrase={seedPhrase}
                      setSeedPhrase={setSeedPhrase}
                      selectedChain={selectedChain}
                    />
                  }
                />
              </Routes>
            </Router>
          ) : (
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/createAccount"
                  element={
                    <CreateAccount
                      setWallet={setWallet}
                      setSeedPhrase={setSeedPhrase}
                    />
                  }
                />
                <Route
                  path="/createPassword"
                  element={
                    <CreatePassword
                      setWallet={setWallet}
                      setSeedPhrase={setSeedPhrase}
                    />
                  }
                />
                <Route
                  path="/recoverAccount"
                  element={
                    <RecoverAccount
                      setSeedPhrase={setSeedPhrase}
                      setWallet={setWallet}
                    />
                  }
                />
              </Routes>
            </Router>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
