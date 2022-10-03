import "./App.css";
import { Routes, Route } from "react-router-dom";
import OnboardingHomepage from "./components/home/onboarding-homepage";
import OnboardingDetails from "./components/details/onboarding-details";
import OnboardingOptions from "./components/options/onboading-options";
import OnboardingCompletion from "./components/complition/onboarding-complition";
import ProgressBar from "./components/progress-bar/progress-bar";
import logo from "./assets/logo.PNG";
import PageIndexProvider from "./store/page-provider";

function App() {
  return (
    <PageIndexProvider>
      <div className="App">
        <header className="App-header">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <h2>Eden</h2>
        </header>
      </div>
      <ProgressBar />
      <Routes>
        <Route path="/onboarding-homepage" element={<OnboardingHomepage />} />
        <Route path="/onboarding-details" element={<OnboardingDetails />} />
        <Route path="/onboarding-options" element={<OnboardingOptions />} />
        <Route
          path="/onboarding-complition"
          element={<OnboardingCompletion />}
        />
        <Route path="/*" element={<OnboardingHomepage />} />
      </Routes>
    </PageIndexProvider>
  );
}

export default App;
