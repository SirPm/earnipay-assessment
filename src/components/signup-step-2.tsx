import React, { useMemo } from "react";
import { InputWrapper, Label, Input, Button } from "./styled-components";
import { SignupFieldsProps } from "../pages/signup";

interface SignupStep2Props {
  signupFields: SignupFieldsProps;
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignupStep2 = (props: SignupStep2Props) => {
  const { signupFields, handleInputChange } = props;

  const isSubmitButtonDisabled = useMemo(() => {
    const { username, address } = signupFields;
    return username === "" || address === "";
  }, [signupFields]);

  return (
    <div>
      <InputWrapper>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={signupFields.username}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="address">Address</Label>
        <Input
          type="text"
          id="address"
          name="address"
          placeholder="Enter address"
          value={signupFields.address}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <Button type="submit" disabled={isSubmitButtonDisabled}>
        Submit
      </Button>
    </div>
  );
};
