import React from "react";
import "./LandingPage.css";
import Navbar from "../Components/Navbar/Navbar";
import NewButton from "../Components/Landing Page Button/LandingButton";
import HeroImage from "../Assets/HeroImage.png";
import LandingFooter from "../Components/Footer/LandingFooter";
import Image1 from "../Assets/FirstFrameImage.png";
import Image2 from "../Assets/SecondFrameImage.png";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="HeroSection">
        <img className="HeroImage" src={HeroImage} />
        <div className="HeroTextBox">
          <div className="TextOverlay">
            We Crush your Competitors, Goals, And Sales Records - Without The
            B.S.
          </div>
          <div className="HeroButton">
            <NewButton />
          </div>
        </div>
      </div>
      <div className="MiddleSection">
        <div className="FirstFrame">
          <div className="FirstFrameImage">
            <img src={Image1} />
          </div>
          <div className="FirstFrameText">
            <div className="FirstFrameHeadingText">
              Web & Mobile App Development
            </div>
            <div className="FirstFrameSubText">
              Your web and mobile apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intends shown by your potential
              customers who interact with your business online.
            </div>
            <button className="LandingFrameButton">LEARN MORE</button>
          </div>
        </div>

        <div className="SecondFrame">
          <div className="SecondFrameText">
            <div className="FirstFrameHeadingText">
              Digital Strategy Consulting
            </div>
            <div className="FirstFrameSubText">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </div>
            <button className="LandingFrameButton">LEARN MORE</button>
          </div>
          <div className="SecondFrameImage">
            <img src={Image2} />
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
