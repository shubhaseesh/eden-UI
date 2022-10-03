import React, { useContext } from "react";
import PageIndexContext from "../../store/page-context";
import { useNavigate } from "react-router-dom";
import "./onboarding-options.styles.css";

const OnboardingOptions = () => {
  const indexCtx = useContext(PageIndexContext);
  const navigate = useNavigate();
  const onBoardingHandler = () => {
    navigate("/onboarding-complition");
    indexCtx.setActiveIndex(3);
  };
  return (
    <div className="options-container">
      <h2>How are you planning to use Eden?</h2>
      <p>We'll streamline your setup experience accordingly.</p>
      <div className="options-card">
        <div className="options-card-body-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <h5 className="options-card-title">For myself</h5>
          <p className="options-card-text">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div className="options-card-body-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            />
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
          <h5 className="options-card-title">With my team</h5>
          <p className="options-card-text">
            Wikis, docs, tasks &#38; projects, all in one place.
          </p>
        </div>
      </div>
      <div className="actions">
        <button type="button" onClick={onBoardingHandler}>
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default OnboardingOptions;
