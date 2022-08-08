import "./App.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-236856540-1"; // OUR_TRACKING_ID

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
  }, []);
  return (
    <BrowserRouter>
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
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
