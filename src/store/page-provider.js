import { useReducer } from "react";
import PageIndexContext from "./page-context";

const defaultIndexState = {
  activeIndex: 0,
};

const indexReducer = (state, action) => {
  if (action.type === "SET") {
    const updatedActiveIndex = (state.activeIndex = action.index);
    return {
      activeIndex: updatedActiveIndex,
    };
  }
};

const PageIndexProvider = (props) => {
  const [indexState, dispatchAction] = useReducer(
    indexReducer,
    defaultIndexState
  );
  const pageHandler = (index) => {
    dispatchAction({ type: "SET", index: index });
  };
  const indexContext = {
    activeIndex: indexState.activeIndex,
    setActiveIndex: pageHandler,
  };
  return (
    <PageIndexContext.Provider value={indexContext}>
      {props.children}
    </PageIndexContext.Provider>
  );
};

export default PageIndexProvider;
