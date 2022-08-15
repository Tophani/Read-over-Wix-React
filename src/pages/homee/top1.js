import React from "react";

function Top1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#767674" }}>In search of what to read next</h1>
      <img src={require("../../img/home1.gif")} />
    </div>
  );
}
export default Top1;
