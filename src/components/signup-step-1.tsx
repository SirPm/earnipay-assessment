import React, { useMemo } from "react";
import { InputWrapper, Label, Input, Button } from "./styled-components";
import { SignupFieldsProps } from "../pages/signup";
import styled from "styled-components";
import NgFlag from "../assets/svg/ng-flag-round.svg";

interface SignupStep1Props {
  signupFields: SignupFieldsProps;
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleContinue: () => void;
}

export const SignupStep1 = (props: SignupStep1Props) => {
  const { signupFields, handleInputChange, handleContinue } = props;

  const isContinueButtonDisabled = useMemo(() => {
    const { firstName, lastName, email, phone } = signupFields;
    return firstName === "" || lastName === "" || email === "" || phone === "";
  }, [signupFields]);

  return (
    <div>
      <InputWrapper>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter firstName"
          value={signupFields.firstName}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter lastName"
          value={signupFields.lastName}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={signupFields.email}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="phone">Phone Number</Label>
        <FlagAndCode>
          <FlagIcon src={NgFlag} alt="nigeria flag icon" />
          <CallCode>+234</CallCode>
        </FlagAndCode>
        <PhoneInput
          id="phone"
          type="phone"
          name="phone"
          placeholder="Enter phone number"
          value={signupFields.phone}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <ContinueButton
        type="button"
        disabled={isContinueButtonDisabled}
        onClick={handleContinue}
      >
        Continue
      </ContinueButton>
    </div>
  );
};

const PhoneInput = styled(Input)`
  padding-left: 75px;
`;

const FlagAndCode = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  display: flex;
  align-items: center;
`;
const FlagIcon = styled.img`
  margin-top: 2px;
`;

const CallCode = styled.span`
  font-size: 14px;
  display: inline-block;
  margin-left: 5px;
  margin-top: 2px;
`;

const ContinueButton = styled(Button)`
  margin-top: 0.75rem;
`;
