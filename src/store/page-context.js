import React from "react";

const PageIndexContext = React.createContext({
  activeIndex: 0,
  setActiveIndex: (index) => {},
});

export default PageIndexContext;
