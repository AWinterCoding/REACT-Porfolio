import React from "react";
import NavigationBar from "./NavigationBar";

function Resume() {
    return (<div>
        <NavigationBar />
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
        </div>);
  }

export default Resume;