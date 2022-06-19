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
          <h1 className="header">Instagram Captions</h1>
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

        {/* Second Title */}
        <div style={{ height: height * 2.2 }}>
          <div className="title-info" style={{}}>
            Captions for Instagram
            {/* <div>hello ddsjdjgkdg</div> */}
          </div>
          <div className="intro-para">
            Instagram is the most popular one in the social media space,
            Millennials use it to share their lifestyle and the brands are using
            it to promote their business. So day by day the user amount is
            increasing at a very high proportion.
            {"                                            "}
            {/*    . Why choose us
          Ours is a single space that has the captions we have collected from
          different resources so that we could satisfy all your caption needs 1.
          We pick the captions manually to match user needs 2. We verify it
          directly before sharing it with you. 3. We care about user experience,
          so you are getting an ad-free experience 4. We update the captions
          frequently, so you could always find something new. */}
          </div>
          <div className="intro-para">
            You could share images and videos as posts, reels and stories on
            Instagram. And at least in all these spaces, a common thing you need
            is a caption. Few lines of text give perfection and purpose to the
            image or video you are sharing.
          </div>
          <div className="intro-para">
            As a person who shares all these posts, reels and stories it's hard
            to come up with a caption each time you are sharing something.
            Bayerna 'Captions for Instagram' is a tool that provides a solution
            for all your caption needs.
          </div>
          <div className="intro-para">
            Our free tool is very simple and easy to use, you could use it at
            any time of the need and use the captions as much as you need. We
            update these captions very frequently so that you could get
            something new each time you visit us. For providing you with the
            best caption we are manually picking these captions from different
            resources and making them available to you in one place. Our team is
            working our best to provide you with the right caption.
          </div>
          <div className="title-info" style={{}}>
            Our Features
            {/* <div>hello ddsjdjgkdg</div> */}
          </div>
          <div className="intro-para">1. Free and Fast</div>{" "}
          <div className="intro-para">2. Ad-free environment</div>{" "}
          <div className="intro-para">
            3. No need to download an extra application
          </div>{" "}
          <div className="intro-para">
            4. No need to sign up and provide your info
          </div>{" "}
          <div className="intro-para">5. Unlimited captions</div>
          <div className="title-info" style={{}}>
            How to use Bayerna's Instagram Captions tool?
          </div>
          <div className="intro-para">
            Our tool is very simple that anyone could just visit and find the
            caption you need. the steps are;
          </div>{" "}
          <div className="intro-para">1. Visit bayerna.com in your browser</div>{" "}
          <div className="intro-para">2. Select the right category for you</div>{" "}
          <div className="intro-para">
            3. If you don't know what you are looking for, browse through the
            trending list
          </div>{" "}
          <div className="intro-para">
            4. Copy the right caption that matches your need
          </div>{" "}
          <div className="intro-para">
            5. Paste it into your reel, posts and stories, enjoy 😁{" "}
          </div>
          <div className="title-info" style={{}}>
            Why choose us
          </div>
          <div className="intro-para">
            {" "}
            Ours is a single space that has the captions we have collected from
            different resources so that we could satisfy all your caption needs.{" "}
          </div>{" "}
          <div className="intro-para">
            1. We pick the captions manually to match user needs{" "}
          </div>{" "}
          <div className="intro-para">
            2. We verify it directly before sharing it with you.
          </div>{" "}
          <div className="intro-para">
            3. We care about user experience, so you are getting an ad-free
            experience
          </div>{" "}
          <div className="intro-para">
            4. We update the captions frequently, so you could always find
            something new.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
