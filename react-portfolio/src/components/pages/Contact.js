import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";

function Contact() {
    return (<div>
        <NavigationBar />
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
        </div>);
  }

export default Contact;