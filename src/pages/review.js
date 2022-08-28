import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import '../assets/review.css'

function Review() {
  const itenss = [
    {
      key: 1,
      img: require("../img/1.jpg"),
      text: "Glasgow Book Festival 2030: The Highlights",
      title:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
    {
      key: 2,
      img: require("../img/2.jpg"),
      text: "Review: The Cat Who Ate My Friend by Steve Paul",
      title:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
    {
      key: 3,
      img: require("../img/3.jpg"),
      text: "The Best Vacation Books You Will Ever Read",
      title:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
    {
      key: "4",
      img: require("../img/4.jpg"),
      text: "Independent Book Stores in Tokyo and Around",
      title:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    },
  ];
  return (
    <div>
      <Navbar />
      <h1
        style={{
          color: "#EF5453",
          textAlign: "center",
          fontWeight: "bolder",
          padding: "2%",
        }}
      >
        The Review
      </h1>
      <div className="list-Review">
        {itenss.map((i) => {
          return (
            <div key={i.key} className="list-item-review">
              <img src={i.img} className="item-image" />
              <div className="itemdiv1">
                <div className="upperdiv1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  fill="grey"
                  className="item-user bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>

                <div className="upperupper">
                  <h4>Admin</h4>
                  <p>
                    Nov 24, 2021 <li></li> 1 min
                  </p>
                </div>

                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
              <div className="itemdiv2">
                <h1>{i.text}</h1>
                <p>{i.title}</p>
              </div>
              <hr className="uphr" style={{width:'90%', marginLeft:'5%'}}/>
              <div className="itemdiv3">
                <p>0 View 0 comments</p>
                <p className="dd">
                  <strong>16</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-heartbreak"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01c6.164-4.4 6.91-7.982 6.22-9.921C14.031 1.37 11.447.42 9.587 1.368L8.136 3.18l1.3 3.468a1 1 0 0 1-.104.906l-1.739 2.608.971 3.237Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06C.895 7.797.597 4.875 1.308 3.248c.756-1.73 2.768-2.577 4.456-2.127L4.732 2.36a1 1 0 0 0-.168.991L5.91 6.943l-1.305 2.61a1 1 0 0 0-.034.818l.442 1.106Z"
                    />
                  </svg>
                </p>
              </div>
              <hr className="downhr" />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
export default Review;
