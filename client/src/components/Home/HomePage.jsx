import React from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import './Home.css';
import Wrapper from "./Wrapper";
import Title from './Title';
import Subtitle from './Subtitle';
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'

function HomePage() {
  return (
    <div className="home">
    <div className="slider">
    <HeroSlider
      height={"60vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Basic Setup</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: img1
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: img2
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: img3
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: img4
        }}
      />

      <MenuNav />
    </HeroSlider>
    </div>
    <div className="lib-btn">
      <button>Visit Library</button>
    </div>
    </div>
  );
}

export default HomePage;
