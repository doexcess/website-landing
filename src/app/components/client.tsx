"use client";

import BlogPost from "./BlogPost";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";

export default function Client() {
  return (
    <>
      <Header />
      <GetStarted />
      <BlogPost />
      <Footer />
    </>
  );
}
