import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from "react-reveal/Slide";
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from "styled-components";
const width = "32rem",
  height = "19rem";
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const CarouselUI = ({ children }) => (
  <Container>
    <Children>{children}</Children>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export default function ModalCarousel() {
  return (
    <Carousel defaultWait={2500}>
      <Slide right>
        <div className="modal-carousel">
          <img src="./images/art.png" />
        </div>
      </Slide>
      <Slide right>
        <div className="modal-carousel">
          <img src="./images/art.png" />
        </div>
      </Slide>
      <Slide right>
        <div className="modal-carousel">
          <img src="./images/art.png" />
        </div>
      </Slide>
    </Carousel>
  );
}
