import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";

function Portfolio() {
    return (<div>
        <NavigationBar />
        <div className="background">
        <div className="container">
        <h2>Portfolio</h2>
        <Footer/>
        </div>
        </div>
        </div>);
  }

export default Portfolio;