import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import '../assets/contact.css'
function Contact() {
  return (
    <div>
    <Navbar />

    <div style={{backgroundColor:"#F6F0EA" }} >
      <h1 style={{ color: "#EF5453", textAlign: "center", paddingTop:'2%',paddingLeft:'35%',paddingRight:'35%' }}>
        Interested in Having Your Book Reviewed?
      </h1>
      <h2 style={{ textAlign: "center", padding: "5%",fontWeight:'normal' }}>Send it over:</h2>
      <h4 style={{ textAlign: "center",fontWeight:'normal' }}>500 Terry Francois Street </h4>
      <h3 style={{ textAlign: "center", paddingBottom: "5%",fontWeight:'normal' }}>
        San Francisco, CA 94158{" "}
      </h3>

      <div style={{ backgroundColor: "white" }}>
        <h1 className="qq1"
          style={{
            color: "#EF5453",
            textAlign: "center",
            paddingBottom: "3%",
            padding: "7%",
            paddingLeft: "35%",
            paddingRight: "35%",
            fontWeight: "bold",
          }}
        >
          For Anything Else,I'm Right Here
        </h1>
        <b />
        <h3 className="q1" style={{ textAlign: "center", fontWeight: "bold" }}>
          Questions,comments and
        </h3>
        <h3 className="q2" style={{ textAlign: "center", fontWeight: "bold",paddingBottom:'5%' }}>
          suggestions - just let me know
        </h3>
        <form className="cform">
          <div className="cformsDiv">
            <label>Email *</label>
            <input type='text' className="inputs" />
          </div>

          <div className="namess">
            <div className="namess-div">
              <label>First Name</label>
              <input type='text' className="inputs" />
            </div>
            <div className="namess-div">
              <label>Last Name</label>
              <input type='text' className="inputs" />
            </div>
          </div>
          <div className="cformsDiv">
            <label>Message</label>
            <textarea className="textareaa"></textarea>
          </div>
          <button>Submit</button>
        </form>
  
        

      </div>
      <Footer />
    </div>
    </div>
 
  )}
export default Contact;
