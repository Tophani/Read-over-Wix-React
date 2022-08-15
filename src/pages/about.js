import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
function About() {
  return (
    <div style={{backgroundColor:'#F6F0EA'}}>
      <Navbar />
      <h1 style={{color:'#EF5453',textAlign:"center",}}>About</h1>
      <h3 style={{paddingLeft:'18%',paddingRight:'18%'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </h3> <b></b>
<h3 style={{paddingLeft:'18%',paddingRight:'18%'}}>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. </h3>
      <Footer/>

    </div>
  );
}
export default About;
