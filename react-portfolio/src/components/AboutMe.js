import React from "react";
import NavigationBar from "./NavigationBar";

// each of the respective components render with the navigation bar because we are 
// calling the navigation bar component inside of the element
function AboutMe() {
    return (<div>
    <NavigationBar />
    <section>
    <h2>AboutMe</h2>
    <h4>Alexandra Winter</h4>
    <p>Hello! My name is Alexandra Winter, I am an aspiring web developer</p>
    <p>As of making this webpage I am currently the most versed in the MERN stack</p>
    <p>However there are a lot of things I enjoy doing outside of web development such as</p>
    <ul>
        <li>Camping</li>
        <li>Hiking</li>
        <li>Video Games</li>
        <li>and Motorcycles</li>
    </ul>
    <p>Please feel free to explore this website I made with REACT.</p>
    </section>
    </div>
    );
  }

export default AboutMe;