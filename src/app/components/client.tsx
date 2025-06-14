"use client";

import { useRef } from "react";
import About from "./About";
import BlogPost from "./BlogPost";
import Features from "./Features";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import Home from "./Home";
import Faq from "./Faq";

export default function Client() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const handleNav = (item: string) => {
    switch (item) {
      case "":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#features":
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#getStarted":
        pricingRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#blogs":
        blogsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header handleNav={handleNav} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={blogsRef}>
        <BlogPost />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={pricingRef}>
        <GetStarted />
      </div>
      <Footer />
    </>
  );
}
