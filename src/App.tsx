import React from "react";
import Header from "./components/Header/Header";

// Home page
import Home from "./pages";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;
