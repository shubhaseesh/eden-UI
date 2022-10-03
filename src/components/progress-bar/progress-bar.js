import React, { useContext } from "react";
import "./progress-bar.styles.css";
import PageIndexContext from "../../store/page-context";

const steps = [
  {
    index: 0,
    label: "Step 1",
  },
  {
    index: 1,
    label: "Step 2",
  },
  {
    index: 2,
    label: "Step 3",
  },
  {
    index: 3,
    label: "Step 4",
  },
];

const ProgressBar = () => {
  const indexCtx = useContext(PageIndexContext);
  const indx = indexCtx.activeIndex + 1;
  return (
    <div className="progress-container">
      <ul className="progress-indicator">
        {steps.map((step) => (
          <li
            key={step.index}
            className={`
                progress-step
                ${indx === step.index ? "active" : "inactive"}
                ${indx > step.index ? "complete" : "incomplete"}
              `}
          >
            <span className="step-number">{step.index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProgressBar;
