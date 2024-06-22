import React from "react";
import styled from "styled-components";
import { RESPONSIVE_SIZE } from "../utils/constants";

export interface AuthCarouselItemProps {
  image: string;
  title: string;
  text: string;
}

export const AuthCarouselItem = (props: AuthCarouselItemProps) => {
  const { image, title, text } = props;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt={`${title}'s image`} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-bottom: 3rem;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    height: fit-content;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h4`
  font-weight: 700;
  color: #e5fdff;
  font-size: 22px;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 14px;
  color: #daf9f0;
`;
