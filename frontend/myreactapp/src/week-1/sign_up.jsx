import React from "react";
import { Link } from "react-router-dom";
import k from "./styles/sign_up.module.css";

const SignUpForm = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sign-Up Form</title>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <link rel="stylesheet" href="styles/sign_up.module.css" />
      <link
        rel="shortcut icon"
        href="/frontend/week-1/img/favicon_io/favicon-16x16.png"
      />
      <div className={k.background_wrapper}>
        <h1 className={k.Title}>Sign-Up for Admin & Cashier</h1>
        <form action="sign_up.php" id="myForm" className={k.form}>
          <fieldset className={k.fieldset}>
            <legend className={k.legend}>Personal Information</legend>
            <div className={k.fieldset_div}>
              <label htmlFor="FirstName">
                First Name:
                <input
                  type="text"
                  name="First_Name"
                  id="FirstName"
                  placeholder="Enter your First Name"
                  required
                  autoComplete="true"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="LastName">
                Last Name:
                <input
                  type="text"
                  name="Last_Name"
                  id="LastName"
                  placeholder="Enter your Last Name"
                  required
                  autoComplete="true"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="DOB">
                Date of Birth:
                <input type="date" name="Date of Birth" id="DOB" required />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="email">
                Email-id:
                <input
                  type="email"
                  name="Mail-id"
                  id="email"
                  placeholder="Enter your Email address"
                  required
                  autoComplete="true"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Phone">
                Phone:
                <input
                  type="number"
                  name="Mobile"
                  id="Phone"
                  placeholder="Enter your mobile number"
                  required
                  autoComplete="true"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Address">Address:</label>
              <br />
              <input
                type="text"
                name="Street"
                id="StreetAddress"
                placeholder="Street Address"
                required
              />
              <br />
              <input
                type="text"
                name="City"
                id="City"
                placeholder="City"
                required
              />
              <br />
              <input
                type="text"
                name="State"
                id="State"
                placeholder="State"
                required
              />
              <br />
              <input
                type="text"
                name="Zip"
                id="ZipCode"
                placeholder="Zip Code"
                required
              />
            </div>
          </fieldset>
          <fieldset className={k.fieldset}>
            <legend className={k.legend}>Account Information</legend>
            <div className={k.fieldset_div}>
              <label htmlFor="Username">
                Username:
                <input
                  type="text"
                  name="Username"
                  id="Username"
                  placeholder="Enter your Username"
                  required
                  autoComplete="true"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Enter your password"
                  required
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="ConfirmPassword">
                Confirm Password:
                <input
                  type="password"
                  name="password"
                  id="ConfirmPassword"
                  placeholder="Re-enter your password"
                  required
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Role">Role:</label>
              <select name="Position" id="Role" required>
                <option value="No-Role">Select your Role</option>
                <option value="Admin">Admin</option>
                <option value="Cashier">Cashier</option>
              </select>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Question1">
                Security Question 1 :
                <input
                  type="text"
                  name="Q1"
                  id="Question1"
                  placeholder="Enter your first question"
                  required
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Answer1">
                Answer 1 :
                <input
                  type="text"
                  name="A1"
                  id="Answer1"
                  placeholder="Provide the answer"
                  required
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Question2">
                Security Question 2 :
                <input
                  type="text"
                  name="Q2"
                  id="Question2"
                  placeholder="Enter your second question"
                  required
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Answer2">
                Answer 2 :
                <input
                  type="text"
                  name="A2"
                  id="Answer2"
                  placeholder="Provide the answer"
                  required
                />
              </label>
            </div>
            <br />
          </fieldset>
          <fieldset className={k.fieldset}>
            <legend className={k.legend}>Additional Information</legend>
            <div className={k.fieldset_div}>
              <label htmlFor="EmergencyName">
                Emergency Contact Name:
                <input
                  type="text"
                  id="EmergencyName"
                  placeholder="Enter contact name"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Relationship">
                Relationship:
                <input
                  type="text"
                  name="Relation"
                  id="Relationship"
                  placeholder="Enter your Relationship status"
                />
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="EmergencyPhone">
                Emergency Contact Number :
                <input
                  type="number"
                  name="Emergency"
                  id="EmergencyPhone"
                  placeholder="Enter contact number"
                />
              </label>
            </div>
            <br />
          </fieldset>
          <fieldset className={k.fieldset}>
            <legend className={k.legend}>Terms and Condition</legend>
            <div className={k.fieldset_div}>
              <label htmlFor="T&C">
                <input type="checkbox" name="terms&con" id="T&C" required />I
                agree to the terms and conditions
              </label>
            </div>
            <br />
            <div className={k.fieldset_div}>
              <label htmlFor="Info_confirm">
                <input
                  type="checkbox"
                  name="Confirmation"
                  id="Info_confirm"
                  required
                />
                I hereby declare that all the information provided by me is
                correct to the best of my knowledge.
              </label>
            </div>
            <br />
          </fieldset>
          <br />
          <div
            className={k.recaptcha}
            data-sitekey="6Lda4QAqAAAAAJsG3CrEtWtWs_T8l1kal-RF9Xf2"
            required
          ></div>
          <br />
          <button type="submit" className={k.submit} id="myButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
