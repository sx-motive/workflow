import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import locomotiveScroll from "locomotive-scroll";
import useScript from "../utils/useScript";

import Footer from "./footer";
import Header from "./header";
import Page from "../pages/page";

import Cookie from "../components/cookie";

export default function Layout() {
  useScript(
    "https://cdn.jsdelivr.net/gh/sx-motive/cdn@master/scripts/cursor.js"
  );
  const location = useLocation();
  useEffect(() => {
    let scroll;
    setTimeout(function () {
      scroll = new locomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    }, 100);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location]);
  return (
    <>
      <Header />
      <Page />
      <Footer />
      <Cookie />
    </>
  );
}
