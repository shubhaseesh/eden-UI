import React, {  useState } from "react";
import "./onboarding-complition.styles.css";
import checkboxImage from "../../assets/checkbox.PNG";
const OnboardingCompletion = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submitHandler = () => {
    setIsSubmitted(true)
  }
  return (
    <div className="complition-container">
      {isSubmitted && <div className="checkbox">
        <img src={checkboxImage} alt="checkbox" />
      </div>}
      <h2>Congractulations, Eren!</h2>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <div className="actions">
        <button type="button" onClick={submitHandler}>Launch Eden</button>
      </div>
    </div>
  );
};

export default OnboardingCompletion;
