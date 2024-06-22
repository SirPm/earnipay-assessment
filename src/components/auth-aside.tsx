import React from "react";
import styled from "styled-components";
import { CustomCarousel } from "./custom-carousel";
import { AuthCarouselItemProps } from "./auth-carousel-item";
import AuthCarouselImg1 from "../assets/svg/auth-carousel-img-1.svg";
import AuthCarouselImg2 from "../assets/svg/auth-carousel-img-2.svg";
import { ScrollArea } from "./scroll-area";
import { RESPONSIVE_SIZE } from "../utils/constants";
import TopRightImg from "../assets/svg/split-screen-top-right-pattern.svg";
import BottomRightImg from "../assets/svg/split-screen-bottom-right-pattern.svg";
import BottomLeftImg from "../assets/svg/split-screen-bottom-left-pattern.svg";

const carouselItems: AuthCarouselItemProps[] = [
  {
    image: AuthCarouselImg1,
    title: "Unlock Efficiency",
    text: "Handle salaries, taxes, reports, and other benefits effortlessly. Earnipay is your solution for stress-free payroll.",
  },
  {
    image: AuthCarouselImg2,
    title: "On Demand Pay",
    text: "Empower your team with Earnipay: instant salary access, no cost, no waiting for payday.",
  },
  {
    image: AuthCarouselImg2,
    title: "Saves Time",
    text: "Empower your team with Earnipay: instant salary access, no cost, no waiting for payday.",
  },
];

export const AuthAside = () => {
  return (
    <Wrapper>
      <ScrollArea height="97.5vh">
        <CarouselWrapper>
          <CustomCarousel carouselItems={carouselItems} />
        </CarouselWrapper>
      </ScrollArea>
      <TopRightPattern src={TopRightImg} alt="top right pattern" />
      <BottomRightPattern src={BottomRightImg} alt="bottom right pattern" />
      <BottomLeftPattern src={BottomLeftImg} alt="bottom left pattern" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(180deg, #006770 0%, #193f52 100%);
  width: 100%;
  max-width: 37.6%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 10px 5px;
  position: relative;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    > div {
      height: fit-content;
    }
  }
`;

const CarouselWrapper = styled.div`
  margin-top: 10%;
  padding: 0 15px;
  position: relative;
  z-index: 10;
`;

const TopRightPattern = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  z-index: 5;
  border-top-right-radius: 12px;
`;

const BottomRightPattern = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  z-index: 5;
  border-bottom-right-radius: 12px;
`;

const BottomLeftPattern = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  z-index: 5;
`;
