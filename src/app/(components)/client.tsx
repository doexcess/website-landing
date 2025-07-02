'use client';

import { useRef } from 'react';
import About from './About';
import BlogPost from './BlogPost';
import Features from './Features';
import Footer from './Footer';
import GetStarted from './GetStarted';
import Header from './Header';
import Home from './Home';
import Faq from './Faq';

export default function Client() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      {/* <div ref={blogsRef}>
        <BlogPost />
      </div> */}
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={pricingRef}>
        <GetStarted />
      </div>
    </>
  );
}
