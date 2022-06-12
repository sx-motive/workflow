import React from "react";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="footer" data-scroll-section data-scroll-repeat>
      <div className="container -section">
        <ul className="social-list">
          <li>
            <Button href="/" className="skew">
              Telegram ↗︎
            </Button>
          </li>
          <li>
            <Button href="/" className="skew">
              Behance ↗︎
            </Button>
          </li>
          <li>
            <Button href="/" className="skew">
              Dribbble ↗︎
            </Button>
          </li>
          <li>
            <Button href="/" className="skew">
              Awwwards ↗︎
            </Button>
          </li>
        </ul>

        <div className="copyright">
          <Button href="/" className="skew">
            Crafted with ❤ ©2022
          </Button>
        </div>
      </div>
    </footer>
  );
}
