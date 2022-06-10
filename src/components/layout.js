import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import locomotiveScroll from "locomotive-scroll";

import Footer from "./footer";
import Header from "./header";
import Page from "../pages/page";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location]);
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}
