import React, { useState } from "react";
import "./style.css";
export default function App() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  function handleSubmit(event) {
    event.preventDefault();

    formData.password === formData.confirmPassword
      ? console.log("Successfully signed up")
      : console.log("passwords to not match");
    formData.newsletter
      ? console.log("Thanks for signing up for our newsletter!")
      : console.log("okays");
  }
  function changeHandle(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={changeHandle}
          name="email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={changeHandle}
          name="password"
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={changeHandle}
          name="confirmPassword"
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={changeHandle}
            name="newsletter"
            checked={formData.newsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
