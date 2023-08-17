import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";

function Contact() {
    return (<div>
        <NavigationBar />
        <div className="background">
        <div className="container">
        <section>
            <h2>Contact Me</h2>
            <form>
                <label>Your Name Here:</label>
                <input type="text"></input>
                <label>Email Address:</label>
                <input type="text"></input>
                <label>Message:</label>
                <input type="text"></input>
                <button type="submit">Submit</button>
            </form>
        </section>
        <Footer/>
        </div>
        </div>
        </div>);
  }

export default Contact;