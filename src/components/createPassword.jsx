import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const isPasswordStrong = (password) => {
    // Password should have at least 8 characters, one uppercase letter, one lowercase letter, and one special character
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;.,'`])(?=.*[^\s]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePasswords = () => {
    if (password === confirmPassword && isPasswordStrong(password)) {
      setIsPasswordValid(true);
      setErrorMessage("");
    } else {
      setIsPasswordValid(false);
      setErrorMessage(
        "Password strength: Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    }
  };

  const generateWallet = () => {
    // Save password to localStorage and redirect if valid
    if (isPasswordValid && isChecked) {
      localStorage.setItem("password", password);
      // Redirect to create account page
      navigate("/createAccount");
    }
  };

  return (
    <div className="content">
      <div className="password-container">
        <h2>Create password</h2>
        <p>
          This password will unlock your MetaMask wallet only on this device.
          MetaMask cannot recover this password.
        </p>
        <div className="password-form">
          <label className="password-label">
            New password (8 characters min, 1 uppercase, 1 lowercase, 1 special
            character):
          </label>
          <input
            id="new-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="password-label">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={validatePasswords}
          />
          <div className="password-terms">
            <label className="password-label-2">
              <input type="checkbox" onClick={handleCheck} />I understand that
              MetaMask cannot recover this password for me.
              <span className="agree-term-2">Learn more</span>
            </label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
      <Button
        className="frontPageButton"
        type="primary"
        disabled={!isChecked || !isPasswordValid}
        onClick={generateWallet}
      >
        Create a new wallet
      </Button>
    </div>
  );
};

export default CreatePassword;
