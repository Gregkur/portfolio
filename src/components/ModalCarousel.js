import React from "react";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";

import styled from "styled-components";

const width = "100%",
  height = "19rem",
  smartphone = window.matchMedia(
    "(min-device-width: 320px) and (max-device-width: 650px)"
  );
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${smartphone.matches ? "45%" : "45%"};
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

export default function ModalCarousel(props) {
  const { currentModal } = props;

  return (
    <Carousel defaultWait={1700}>
      <Slide right>
        <div className="modal-carousel">
          <img src={`./images/${currentModal}/1.png`} alt="website" />
        </div>
      </Slide>
      <Slide right>
        <div className="modal-carousel">
          <img src={`./images/${currentModal}/2.png`} alt="close up" />
        </div>
      </Slide>
      <Slide right>
        <div className="modal-carousel">
          <img src={`./images/${currentModal}/3.png`} alt="details" />
        </div>
      </Slide>
    </Carousel>
  );
}
