import React, { useEffect } from "react";
import Slider from "../../Components/ClientSideComponents/HomeComponents/Slider";
import BestSeller from "../../Components/ClientSideComponents/HomeComponents/BestSeller";
import NewReleases from "../../Components/ClientSideComponents/HomeComponents/NewReleases";
import AOS from "aos";
import "aos/dist/aos.css";
import Promotion from "../../Components/ClientSideComponents/HomeComponents/Promotion";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,
      offset: 100, // Trigger when the element is 100px from the viewport
      delay: 200,
    });
  }, []);

  return (
    <div>
      <Slider />
      <BestSeller />
      <Promotion />
      <NewReleases />
    </div>
  );
};

export default Home;
