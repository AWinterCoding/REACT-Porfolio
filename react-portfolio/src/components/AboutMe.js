import React from "react";
import NavigationBar from "./NavigationBar";

// each of the respective components render with the navigation bar because we are 
// calling the navigation bar component inside of the element
function AboutMe() {
    return (<div>
    <NavigationBar />
    <p>AboutMe</p>
    </div>
    );
  }

export default AboutMe;