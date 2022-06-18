import { useState, useEffect } from "react";

import "./App.css";
import CaptionComp from "./components/CaptionComp";
import SingleTitle from "./components/SingleTitle";

import useWindowDimensions from "./services/useWindowDimensions";
import { BallTriangle } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Caption Copied");
  const [captionData, setCaptionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [titleType, setTitleType] = useState("trending");
  const titleData = ["trending", "love", "nature", "friendship", "travel"];

  const fetchPosts = async () => {
    fetch("https://cap-generator.herokuapp.com/api/v1/posts")
      .then((response) => response.json()) // convert to json
      .then((json) => {
        setIsLoading(false);
        setCaptionData(json);
      }) //print data to console ggg
      .catch((err) => console.log("Request Failed", err));
  };

  const onTitleClick = (value) => {
    setTitleType(value);
    setIsLoading(true);
    setTimeout(() => {}, "1000");
  };

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // setIsLoading(true);
    fetchPosts();
  });

  return (
    <div>
      <ToastContainer
        // toastStyle={{ backgroundColor: "#DFFF00" }}
        bodyClassName="toast-text"
        toastClassName="toast-text2"
        progressClassName="progress-color"
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        // progressStyle={{ color: "red", backgroundColor: "red" }}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div>
        {/* header */}
        <div>
          <div className="header">Instagram Captions</div>
        </div>

        {/* caption-category */}
        <div style={{ marginTop: 50, margin: 50, flexDirection: "row" }}>
          {titleData.map((item) => (
            <SingleTitle
              text={"#" + item}
              filled={titleType === item}
              onClick={() => {
                onTitleClick(item);
              }}
            />
          ))}
        </div>

        {/* caption-container */}

        <div style={{ height: height - 220 }} className="caption-container">
          {isLoading === true ? (
            <div style={{ height: height - 220 }} className="loader-style">
              <BallTriangle
                color="#c8ee90"
                height={height - 450}
                width={width - 400}
              />
            </div>
          ) : (
            captionData.map((item) => (
              <CaptionComp
                data={item}
                onCopyClick={notify}
                titleType={titleType}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
