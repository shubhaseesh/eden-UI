import React,{useContext} from "react";
import PageIndexContext from "../../store/page-context";
import { useNavigate } from "react-router-dom";
import "./onboarding-details.styles.css";
const OnboardingDetails = () => {
  const indexCtx = useContext(PageIndexContext)
  const navigate = useNavigate();
  const onBoardingHandler = () => {
    navigate("/onboarding-options");
    indexCtx.setActiveIndex(2)
  };
  return (
    <div className="details-container">
      <h2>Let's set up a home for all your work</h2>
      <p>You can always create another workspace later.</p>
      <form className="form">
        <div className="control">
          <label htmlFor="workspace-name">Workspace Name</label>
          <input type="text" id="workspace-name" placeholder="Eden" />
        </div>
        <div className="control">
          <label htmlFor="workspace-url">
            Workspace URL <span>(optional)</span>
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                www.eden.com/
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Example"
            />
          </div>
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

export default OnboardingDetails;
