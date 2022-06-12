import React from "react";
import Marquee from "react-fast-marquee";
import Button from "../components/button";

import Text from "../components/text";

export default function Index() {
  return (
    <>
      <section className="hero" data-scroll-section data-scroll-repeat>
        <div className="container -section">
          <Marquee gradient={false} speed={120}>
            <Text caption size="main">
              Frontend Developer & Digital Designer
            </Text>
          </Marquee>
          <Text paragraph>
            WE CAN CREATE AN AMAZING DIGITAL EXPERIENCE TOGETHER
          </Text>
        </div>
      </section>
      <section className="about" data-scroll-section data-scroll-repeat>
        <div className="container -center">
          <Text caption size="big">
            L'ESSENZA ARTIGIANALE DELLE CALZATURE.
          </Text>
          <Text paragraph>
            Over the lasts years I realized - It's not enough to simply sell
            products anymore, people need brands that lead from the heart and
            share their values. That's why I focus on Branding. Whether a brand
            is looking for a refresh or finding its voice at the very begging, I
            will help find its purpose and connect with their target. I believe
            in creating beautiful and complete brand experiences by helping them
            connect with their intention and know-how to communicate their
            purpose.
          </Text>
          <Text paragraph>
            Currently I'm working as a freelancer looking for new brands to
            create complete branding experiences and help them find their voice.
            I believe collaboration allows us to create a different narratives
            for each brand. That's why depending on the project I love
            collaborating with specialists from different fields.
          </Text>
          <Button href="/" className="solid">
            Message on Telegram
          </Button>
        </div>
      </section>
      <section className="workflow" data-scroll-section data-scroll-repeat>
        <div className="container">
          <ul>
            <li>
              <Text caption size="big" className="title">
                ALWAYS KEEN FOR A GOOD
              </Text>
              <Text paragraph className="date">
                2022
              </Text>
            </li>
            <li>
              <Text caption size="big" className="title">
                ALWAYS KEEN FOR A GOOD
              </Text>
              <Text paragraph className="date">
                2022
              </Text>
            </li>
            <li>
              <Text caption size="big" className="title">
                ALWAYS KEEN FOR A GOOD
              </Text>
              <Text paragraph className="date">
                2022
              </Text>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
