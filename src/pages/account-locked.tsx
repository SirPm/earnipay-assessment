import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthCard, Button } from "../components/styled-components";
import PadlockIcon from "../assets/svg/padlock.svg";
import InfoWarningOutlineIcon from "../assets/svg/info-warning-outline.svg";
import { PAGE_ROUTES, RESPONSIVE_SIZE } from "../utils/constants";

export const AccountLocked = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate(PAGE_ROUTES.LOGIN);
  };

  return (
    <Wrapper>
      <Card>
        <ImageWrapper>
          <ImgIcon src={PadlockIcon} alt="padlock icon" />
        </ImageWrapper>
        <Title>Account Restricted</Title>
        <InfoBanner>
          <InfoOutline src={InfoWarningOutlineIcon} alt="info outline" />
          <InfoBannerText>
            Please note that your account has been locked for security reasons
          </InfoBannerText>
        </InfoBanner>
        <Text>
          To unlock your account please contact{" "}
          <CustomerCareEmail href="mailto:customer@earnipay.com">
            customer@earnipay.com
          </CustomerCareEmail>
        </Text>
        <Button type="button" onClick={handleNavigateToLogin}>
          Back to Login
        </Button>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    width: 90%;
    margin: auto;
  }
`;

const Card = styled(AuthCard)``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const ImgIcon = styled.img`
  width: 125px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #1a1a1a;
  text-align: center;
`;

const InfoBanner = styled.div`
  background-color: #fef5e7;
  border-radius: 8px;
  padding: 18px;
  display: flex;
  margin: 1rem 0;
`;

const InfoOutline = styled.img``;

const InfoBannerText = styled.p`
  color: #101828;
  font-size: 13px;
  margin-left: 9px;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 14px;
  color: #344054;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.8rem;
`;

const CustomerCareEmail = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  color: #00535c;
`;
