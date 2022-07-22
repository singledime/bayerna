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
            <h1>Captions for Instagram </h1>
            {/* <div>hello ddsjdjgkdg</div> */}
          </div>
          <div className="intro-para">
            <p>
              Instagram is the most popular one in the social media space,
              Millennials use it to share their lifestyle and the brands are
              using it to promote their business. So day by day the use case of
              Instagram is growing into areas that haven't been discovered
              before.
            </p>
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
            <p>
              You could share images and videos as posts, reels and stories on
              Instagram. And at least in all these spaces, a common thing you
              need is a caption. Few lines of text give perfection and purpose
              to the image or video you are sharing.
            </p>
          </div>
          <div className="intro-para">
            <p>
              As a person who shares all these posts, reels and stories it's
              hard to come up with a caption each time you are sharing
              something. Bayerna 'Captions for Instagram' is a tool that
              provides a solution for all your caption needs.
            </p>
          </div>
          <div className="intro-para">
            <p>
              Our free tool is very simple and easy to use, you could use it at
              any time of the need and use the captions as much as you need. We
              update these captions very frequently so that you could get
              something new each time you visit us. For providing you with the
              best caption we are manually picking these captions from different
              resources and making them available to you in one place. Our team
              is working our best to provide you with the right caption.
            </p>
          </div>
          <div className="title-info" style={{}}>
            <h2>Our Features </h2>
            {/* <div>hello ddsjdjgkdg</div> */}
          </div>
          
            <div className="intro-para"><p>1. Free and Fast</p></div>{" "}
            <div className="intro-para"><p>2.Ad-free environment</p></div>{" "}
            <div className="intro-para">
             <p> 3. No need to download an extra application </p>
            </div>{" "}
            <div className="intro-para"><p>
              4. No need to sign up and provide your info</p>
            </div>{" "}
            <div className="intro-para"><p>5. Unlimited captions</p></div>
          </p>
          <div className="title-info" style={{}}>
            <h3>How to use Bayerna's Instagram Captions tool?</h3>
          </div>
          <div className="intro-para">
            <p>Our tool is very simple that anyone could just visit and find the
            caption you need. the steps are;</p>
          </div>{" "}
          <div className="intro-para"><p>1. Visit bayerna.com in your browser</p></div>{" "}
          <div className="intro-para"><p>2. Select the right category for you</p></div>{" "}
          <div className="intro-para">
            <p>3. If you don't know what you are looking for, browse through the
            trending list</p>
          </div>{" "}
          <div className="intro-para">
            <p>4. Copy the right caption that matches your need</p>
          </div>{" "}
          <div className="intro-para">
           <p> 5. Paste it into your reel, posts and stories, enjoy 😁{</p>" "}
          </div>
          <div className="title-info" style={{}}>
            <h3>Why choose us</h3>
          </div>
          <div className="intro-para">
            {" "}
            <p>Our team researches Instagram and its marketing potential for
            personal blogs and brands. We specifically concentrated on the
            possibilities that a  good caption can bring to the table.  Bayerna
            captions is a single space that has the captions we have collected
            from different resources so that we could satisfy all your caption
            needs. Bayerna Captions specialities are ; </p>
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
          <div className="title-info" style={{}}>
            <h3>Why Instagram? </h3>
          </div>
          <div className="intro-para">
            <p>Instagram offers three ways to share our content, those are photos,
            reels and stories. The majority of the time I spend on Instagram is
            in reels.  There are so many content creators on Instagram. To get
            the most recent updates from my favourite athletes and actors, I
            head straight to Instagram. It's also a great platform for getting
            updates from our favourite brands. If You haven't tried Instagram
            yet,
            <a
              href="https://www.instagram.com/accounts/emailsignup/"
              style={{ color: "#fb3958" }}
            >
              {" "}
              You can Signup from here.
            </a>
            </p>
          </div>
          <div className="title-info" style={{}}>
            <h3>What are Instagram captions? </h3>
          </div>
          <div className="intro-para">
            <p>The Instagram caption is a piece of text that you see along with the
            Instagram posts, which will make the post either more memorable or
            it explains the context. You can upload your posts with or without
            the caption. Whatever the post you are trying to share, there will
            be a point where you feel like something is missing, that gap can be
            filled with a caption.</p>
          </div>
          <div className="title-info" style={{}}>
            <h3>Why Instagram captions? </h3>
          </div>
          <div className="intro-para" style={{ paddingBottom: 100 }}>
            <p>You can use an Instagram caption to share more information about
            your posts. a caption can influence the way a viewer sees the post.
            With a caption, you can connect more effectively with your audience.
            Even the brands and the influencers spent a good time coming up with
            a caption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
