import React, { Fragment } from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import RecentPosts from "../Components/HomeComponents/RecentPosts";
import FeaturedWorks from "../Components/HomeComponents/FeaturedWorks";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Fragment>
  );
};

export default Home;
