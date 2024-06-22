import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { AuthCarouselItem, AuthCarouselItemProps } from "./auth-carousel-item";

interface CustomCarouselProps {
  carouselItems: AuthCarouselItemProps[];
}

export const CustomCarousel = (props: CustomCarouselProps) => {
  const { carouselItems } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (_: number) => {
      return <Indicator />;
    },
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <AuthCarouselItem key={`${item.title}-${index}`} {...item} />
        ))}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .slick-dots {
    position: initial;
    margin: 2rem 0 4rem;
  }

  .slick-dots li {
    width: fit-content;
    height: fit-content;
    margin: 0 5px;
  }

  .slick-dots li button:before {
    font-size: 0;
  }

  .slick-dots li.slick-active div {
    background-color: #72b3b8;
  }

  .slick-dots li div {
    background-color: #006770;
  }
`;

const Indicator = styled.div`
  width: 27px;
  height: 4px;
  border-radius: 2px;
`;
