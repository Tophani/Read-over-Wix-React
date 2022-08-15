import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoPlay from "react-awesome-slider/dist/autoplay"
import 'react-awesome-slider/dist/styles.css'

function Top2() {
  const AutoplaySlider= withAutoPlay(AwesomeSlider);

  const books=[
    {url:require('./bookfolder/eye.png'), key:1},
    {url:require('./bookfolder/poetry.jpg'), key:2},
    {url:require('./bookfolder/simplicity.png'), key:3},
    {url:require('./bookfolder/geleta.png'),key:4},
  ]
  return (
    <div style={{ backgroundColor: "#F6F0EA" }}>
      <h1
      className="fs-1 "
        style={{
          color: "#EF5453",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <br/>
        What I'm Reading Now
      </h1>
      <AwesomeSlider >
      {books.map((i)=>{
        return(
          <div key={i.key} style={{backgroundColor:'#F6F0EA'}} >
            <img src={i.url} />
          </div>
           
         
        );
      })}

      </AwesomeSlider>
        {/* <SimpleImageSlider
        width={'100%'}
        height={1500}
        images={books}
        showBullets={false}
        showNavs={true}
        autoPlay={false} bgColor='#F6F0EA' /> */}


    </div>
  );
}

export default Top2;
