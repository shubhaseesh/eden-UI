import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageIndexContext from "../../store/page-context";
import "./onboarding-homepage.styles.css";

const OnboardingHomepage = () => {
  const indexCtx = useContext(PageIndexContext);
  const navigate = useNavigate();
  const onBoardingHandler = () => {
    navigate("/onboarding-details");
    indexCtx.setActiveIndex(1);
  };
  return (
    <div className="homepage-container">
      <h2>Welcome! First things first...</h2>
      <p>You can always change them later.</p>
      <form className="form">
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Full Name" />
        </div>
        <div className="control">
          <label htmlFor="d-name">Display Name</label>
          <input type="text" id="d-name" placeholder="Display Name" />
        </div>
        <div className="control">
          <button type="button" onClick={onBoardingHandler}>
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingHomepage;
