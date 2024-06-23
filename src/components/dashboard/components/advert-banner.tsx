import React from "react";
import styled from "styled-components";
import {
  Button,
  DashboardWrapper,
  DashboardCard,
} from "../../styled-components";
import AdvertImage from "../../../assets/svg/cash-payment.svg";
import PlayIcon from "../../../assets/svg/play-icon.svg";
import CloseIconCircle from "../../../assets/svg/close-icon-circle.svg";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

export const AdvertBanner = () => {
  return (
    <Wrapper>
      <Card>
        <CardContent>
          <ImageWrapper>
            <Image src={AdvertImage} alt="cash payment" />
          </ImageWrapper>
          <ContentWrapper>
            <Title>The New On-Demand Pay Module for Businesses</Title>
            <Text>
              Supercharge your business and allow your employees request their
              wages anytime and anywhere, directly from their smartphones
            </Text>
          </ContentWrapper>
          <WatchVideoButton>
            <ButtonIconWrapper>
              <ButtonIcon src={PlayIcon} alt="play icon" />
            </ButtonIconWrapper>
            <ButtonText>Watch Video</ButtonText>
          </WatchVideoButton>
        </CardContent>
        <CloseIcon src={CloseIconCircle} alt="close icon" />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled(DashboardWrapper)``;

const Card = styled(DashboardCard)`
  background-color: #fef5e7;
  border: 1px solid #ffefd8;
  position: relative;
  width: 100%;
`;

const CardContent = styled.div`
  width: 100%;
  max-width: 90.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 7.5%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    max-width: 25%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 65.3%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #1a202c;
`;

const Text = styled.p`
  color: #4a5564;
  font-size: 16px;
  margin-top: 10px;
`;

const WatchVideoButton = styled(Button)`
  background-color: #00535c;
  color: #ffffff;
  border-radius: 8px;
  position: relative;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  max-width: 20.7%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    max-width: 100%;
  }
`;

const ButtonIconWrapper = styled.div`
  width: 45px;
  height: 45px;
  margin-left: -15px;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) {
    width: 30px;
    height: 30px;
    margin-left: 0;
    margin-top: 2px;
  }
`;

const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) {
    font-size: 13px;
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;
