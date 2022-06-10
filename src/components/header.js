import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" data-scroll-section>
      Header <Link to="/">Index</Link> | <Link to="/about">About</Link>
    </header>
  );
}
