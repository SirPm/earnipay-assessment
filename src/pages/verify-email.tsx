import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import {
  AuthCard,
  Button,
  Input,
  StyledLink,
} from "../components/styled-components";
import Logo from "../assets/svg/logo-1.svg";
import MailEnvelope from "../assets/svg/mail-envelope.svg";
import { PAGE_ROUTES, RESPONSIVE_SIZE } from "../utils/constants";

export const VerifyEmail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const isButtonDisabled = useMemo(() => {
    return otp.length < 6;
  }, [otp]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate(PAGE_ROUTES.ACCOUNT_LOCKED);
  };

  return (
    <Wrapper>
      <Card>
        <ImageWrapper>
          <ImgIcon src={Logo} alt="earnipay logo" />
        </ImageWrapper>
        <EnvelopeIconWrapper>
          <EnvelopeIcon src={MailEnvelope} alt="envelope icon" />
        </EnvelopeIconWrapper>
        <Title>Verify your email</Title>
        <Text>Enter the OTP sent to lao**@gmail.com</Text>
        <form onSubmit={handleSubmit}>
          <OtpWrapper>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <Input {...props} />}
              inputStyle="otp-input"
              containerStyle="otp-input-container"
            />
          </OtpWrapper>
          <Button type="submit" disabled={isButtonDisabled}>
            Continue
          </Button>
        </form>
        <FooterTextWrapper>
          <ResetLink to={"#"}>Resend Code</ResetLink>
          &nbsp;<FooterText>in 00:32</FooterText>
        </FooterTextWrapper>
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
`;

const ImgIcon = styled.img`
  width: 125px;
`;

const EnvelopeIconWrapper = styled(ImageWrapper)`
  margin: 1.6rem 0;
`;

const EnvelopeIcon = styled.img`
  width: 80px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: #1a1a1a;
  text-align: center;
`;

const Text = styled.p`
  font-size: 14px;
  color: #7987a1;
  text-align: center;
  margin-top: 0.5rem;
`;

const OtpWrapper = styled.div`
  margin: 1rem 0;

  .otp-input-container {
    justify-content: space-between;
  }

  .otp-input {
    border: none;
    border-bottom: 1.5px solid #adb5bd;
    border-radius: 0;
    width: 16.7% !important;
    font-size: 24px;
    font-weight: 700;

    &:focus {
      border-bottom: 1.5px solid #372aa4;
    }
  }
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-weight: 700;
`;

const FooterText = styled.p`
  font-size: 15px;
  color: #1a202c;
`;

const ResetLink = styled(StyledLink)`
  text-decoration: underline;
`;
