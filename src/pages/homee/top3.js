import React from "react";
import pool from "../../img/pool.webp";
import one from '../../img/1.jpg'
import two from '../../img/2.jpg'
import three from '../../img/3.jpg'
import four from '../../img/4.jpg'
import five from '../../img/5.jpg'
import six from '../../img/6.jpg'
import './css/top3.css'

export default function top3() {
    const items= [{
        img:require('../../img/1.jpg'),
        text:'Glasgow Book Festival 2030: The Highlights',
        key:1,
    },{
        img:two,
        text:'Review: The Cat Who Ate My Friend by Steve Paul',
        key:2,
    },{
        img:three,
        text:'Independent Book Stores in Tokyo and Around',
        key:3,
    },{
        img:four,
        text:'The Best Vacation Books You Will Ever Read',
        key:4,
    },{
        img:five,
        text:'Review: Velvet Bananas by John B. McKinsey',
        key:5,
    },{
        img:six,
        text:'5 Tips: How to Get Published with Abby Morely ',
        key:6,
    }]
  return (
    <div
      style={{
        color: "#EF5453",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:'70px'
      }}
    >
      <h1
        style={{
          color: "#EF5453",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Latest Posts
      </h1>
      <img
        src={pool}
        style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }}/>
      <h3 style={{ paddingLeft: "%", color: "black", paddingRight: "20%" }}>
        The Best Vacation Books You Will Read
      </h3>
      <br/>
      <div className="itemss" >
        {items.map((i)=>{
            return(
                <div key={i.key}>
                    <img src={i.img} className='top3item-img'  />     
                    <p><b>{i.text}</b></p>
                </div>

            )
        })}

      </div>
    </div>
  );
}
