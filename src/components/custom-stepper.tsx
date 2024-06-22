import React from "react";
import { Stepper, Step } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import { stepClasses } from "@mui/material/Step";
import { styled as MuiStyled } from "@mui/system";

interface CustomStepperProps {
  steps: string[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export const CustomStepper = (props: CustomStepperProps) => {
  const { steps, activeStep, setActiveStep } = props;

  const handleStepLabelClick = (index: number) => {
    const labelsStep = index + 1;
    if (activeStep < labelsStep) return;
    setActiveStep(labelsStep);
  };

  return (
    <Wrapper>
      <StepLabel>Step {activeStep} of 2</StepLabel>
      <CustomStepperComponent activeStep={activeStep}>
        {steps.map((label, index) => (
          <CustomStep
            key={`${label}-${index}`}
            onClick={() => handleStepLabelClick(index)}
          />
        ))}
      </CustomStepperComponent>
    </Wrapper>
  );
};

const Wrapper = MuiStyled("div")``;

const StepLabel = MuiStyled("div")`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0.5rem 0 1.1rem;
  color: #00535C;
  font-size: 15px;
  font-weight: 600;
`;

const CustomStepperComponent = MuiStyled(Stepper)(() => ({
  padding: 0,
  marginBottom: "1.5rem",

  [`& .${stepConnectorClasses.root}`]: {
    display: "none",
  },
}));

const CustomStep = MuiStyled(Step)(() => ({
  [`&.${stepClasses.root}`]: {
    width: "100%",
    backgroundColor: "#E2E6F9",
    height: 4,
    borderRadius: 20,
    padding: 0,
    cursor: "pointer",
  },

  [`&.${stepClasses.completed}`]: {
    backgroundColor: "#00535C",
    height: 6,
    position: "relative",

    "&:after": {
      content: '""',
      position: "absolute",
      backgroundColor: "#00535C",
      top: 0,
      right: "-6px",
      width: 8,
      height: 6,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
  },
}));
