import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthCard, StyledLink } from "../components/styled-components";
import Logo from "../assets/svg/logo-1.svg";
import { PAGE_ROUTES, RESPONSIVE_SIZE } from "../utils/constants";
import { CustomStepper } from "../components/custom-stepper";
import { SignupStep1 } from "../components/signup-step-1";
import { SignupStep2 } from "../components/signup-step-2";
import { ScrollArea } from "../components/scroll-area";

const SIGNUP_STEPS = ["STEP_1", "STEP_2"];

enum STEPS {
  STEP_1 = 1,
  STEP_2 = 2,
}

export interface SignupFieldsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  address: string;
}

export const Signup = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [signupFields, setSignupFields] = useState<SignupFieldsProps>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    address: "",
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setSignupFields({
      ...signupFields,
      [name]: value,
    });
  };

  const handleContinue = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate("/dashboard");
  };

  const stepsMap: Record<string, React.ReactNode> = {
    [STEPS.STEP_1]: (
      <SignupStep1
        signupFields={signupFields}
        handleInputChange={handleInputChange}
        handleContinue={handleContinue}
      />
    ),
    [STEPS.STEP_2]: (
      <SignupStep2
        signupFields={signupFields}
        handleInputChange={handleInputChange}
      />
    ),
  };

  return (
    <Wrapper>
      <ScrollArea height="85vh">
        <Card>
          <LogoWrapper>
            <LogoImg src={Logo} alt="earnipay logo" />
          </LogoWrapper>
          <Title>Let's get you started</Title>
          <CustomStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={SIGNUP_STEPS}
          />
          <form onSubmit={handleSubmit}>{stepsMap[activeStep] || null}</form>
          <FooterTextWrapper>
            <FooterText>Already have an account?</FooterText>&nbsp;
            <StyledLink to={PAGE_ROUTES.LOGIN}>Log In</StyledLink>
          </FooterTextWrapper>
        </Card>
      </ScrollArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;

  > div {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0px 0px 4px 0px #0000000d;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    width: 90%;
    margin: auto;

    > div {
      height: fit-content;
    }
  }
`;

const Card = styled(AuthCard)``;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 125px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: #1a1a1a;
  margin: 1.5rem 0;
  text-align: center;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

const FooterText = styled.p`
  font-size: 15px;
  color: #7987a1;
`;
