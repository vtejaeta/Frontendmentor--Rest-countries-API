import React from "react";
import Dummy from "./Dummy";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
          <Route path="/" exact component={Dummy} />
          <Route path="/country/" component={CountryDetails} />
        </header>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
