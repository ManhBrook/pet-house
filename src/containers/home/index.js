import React from "react";
import Banner from "./Banner";
import Search from "./Search";
import WhyUs from "./WhyUs";
import Room from "./Room";
import Review from "./Review";


export default function Home() {
  return(
    <>
      <Banner/>
      <Search/>
      <WhyUs/>
      <Room/>
      <Review/>
    </>
  );
}