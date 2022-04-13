import React from "react";
import './normalize.css';
import './index.css';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Billboard from "./components/Billboard/Billboard";
import Titles from "./components/Titles/Titles";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Billboard />
      <Navigation /> 
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
