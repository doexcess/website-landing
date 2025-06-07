"use client";

import About from "./About";
import BlogPost from "./BlogPost";
import Features from "./Features";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import Home from "./Home";

export default function Client() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <GetStarted />
      <BlogPost />
      <Footer />
    </>
  );
}
