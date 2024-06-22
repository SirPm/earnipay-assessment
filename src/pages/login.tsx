import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  AuthCard,
  Button,
  Input,
  InputWrapper,
  Label,
  StyledLink,
} from "../components/styled-components";
import EyeSlash from "../assets/svg/eye-slash.svg";
import EyeOpen from "../assets/svg/eye-open.svg";
import Logo from "../assets/svg/logo-1.svg";
import { PAGE_ROUTES, RESPONSIVE_SIZE } from "../utils/constants";

export const Login = () => {
  const navigate = useNavigate();
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setLoginFields({
      ...loginFields,
      [name]: value,
    });
  };

  const isButtonDisabled = useMemo(() => {
    const { email, password } = loginFields;
    return email === "" || password === "";
  }, [loginFields]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Wrapper>
      <Card>
        <LogoWrapper>
          <LogoImg src={Logo} alt="earnipay logo" />
        </LogoWrapper>
        <Title>Log In to Earnipay</Title>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={loginFields.email}
              onChange={handleInputChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              value={loginFields.password}
              onChange={handleInputChange}
              required
            />
            <InputIcon
              src={showPassword ? EyeSlash : EyeOpen}
              alt="password input icon"
              onClick={handleTogglePasswordVisibility}
            />
          </InputWrapper>
          <ForgotPasswordWrapper>
            <StyledLink to={"#"}>Forgot password?</StyledLink>
          </ForgotPasswordWrapper>
          <Button type="submit" disabled={isButtonDisabled}>
            Login
          </Button>
        </form>
        <FooterTextWrapper>
          <FooterText>Don't have an account?</FooterText>&nbsp;
          <StyledLink to={PAGE_ROUTES.SIGNUP}>Register</StyledLink>
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

const InputIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  bottom: 50%;
  top: 50%;
  cursor: pointer;
`;

const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1.2rem 0;
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
