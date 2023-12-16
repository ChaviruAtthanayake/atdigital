import React from "react";
import "./LandingPage.css";
import Navbar from "../Components/Navbar/Navbar";
import NewButton from "../Components/Landing Page Button/LandingButton";
import HeroImage from "../Assets/HeroImage.png";
import LandingFooter from "../Components/Footer/LandingFooter";

function LandingPage() {
    return (
        <div>
            <Navbar />
            {/* <NewButton /> */}
            <div className="HeroSection">
                <img className="HeroImage" src={HeroImage} />
                <div className="HeroTextBox">
                    <div className="TextOverlay">
                        We Crush your Competitors, Goals, And Sales Records - Without The B.S.
                    </div>
                    <div className="HeroButton">
                    <NewButton />
                    </div>
                </div>
            </div>
            <LandingFooter />
        </div>
    );
}

export default LandingPage;