import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";

function Resume() {
    return (<div>
        <NavigationBar />
        <div className="background">
        <div className="container">
        <section>
            <h2>Resume</h2>
            <a href="#">Download Resume</a>
            <h4>Proficiencies:</h4>
            <ul>
                <li>MERN</li>
                <li>REACT</li>
                <li>Express</li>
                <li>Mongo</li>
                <li>Node</li>
                <li>HandleBars</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>mySQL</li>
                <li>Sequelize</li>
            </ul>
        </section>
        <Footer/>
        </div>
        </div>
        </div>);
  }

export default Resume;