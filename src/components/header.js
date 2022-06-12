import React from "react";

import Button from "./button";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="header" data-scroll-section data-scroll-repeat>
      <div className="container">
        <div className="logo">
          <Button href="/" className="skew">
            Denis Kunitsyn
          </Button>
        </div>
        <Menu />
      </div>
    </header>
  );
}
