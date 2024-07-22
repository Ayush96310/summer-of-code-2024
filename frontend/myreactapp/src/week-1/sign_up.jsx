import React, { useEffect, useState } from "react";
import styles from "./styles/sign_up.module.css";
import SuccessfulSignup from "../week-2/successful_signup";
import { handleFormSubmit } from "../week-2/static/scripts/signup";

const SignUpForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordsMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };
  useEffect(() => {
    const form = document.getElementById("myForm");
    const formSubmitHandler = (event) => handleFormSubmit(event, showModal);
    form.addEventListener("submit", formSubmitHandler);

    return () => {
      form.removeEventListener("submit", formSubmitHandler);
    };
  }, []);
  const showModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign-Up for Admin & Cashier</h1>
      <form id="myForm" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Personal Information</legend>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="First_Name"
                placeholder="Enter your First Name"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="Last_Name"
                placeholder="Enter your Last Name"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="Username"
                placeholder="Enter your Username"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Contact:
              <input
                type="tel"
                name="Contact"
                placeholder="Enter you Contact Number"
                maxLength="12"
                required
              />
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Account Information</legend>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="Email"
                placeholder="Enter your Email address"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="Password"
                placeholder="Enter your password"
                required
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div>
            <label>
              Confirm Password:
              <input
                type="password"
                name="ConfirmPassword"
                placeholder="Re-enter your password"
                required
                onChange={handleConfirmPasswordChange}
              />
            </label>
            {!passwordsMatch && (
              <p className={styles.error}>Passwords do not match!</p>
            )}
          </div>
          <div>
            <label>
              Role:
              <select name="Role" required>
                <option value="">Select your Role</option>
                <option value="1">Admin</option>
                <option value="0">Cashier</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Terms and Conditions</legend>
          <div>
            <label>
              <input type="checkbox" name="terms" required /> I agree to the
              terms and conditions
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="info_confirm" required /> I hereby
              declare that all the information provided by me is correct to the
              best of my knowledge.
            </label>
          </div>
        </fieldset>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
      {isModalOpen && (
        <SuccessfulSignup
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SignUpForm;
