import React, { useState } from "react";
import Popover, { popoverClasses } from "@mui/material/Popover";
import { styled as MuiStyled } from "@mui/system";
import styled from "styled-components";
import { Button } from "./styled-components";
import ChevronDownIcon from "../assets/svg/chevron-down-black-rounded.svg";

export interface CustomSelectOption {
  label: string;
  value: string;
}
interface CustomSelectProps {
  options: CustomSelectOption[];
  handleOptionSelect: (value: CustomSelectOption) => void;
  label: string;
}

export const CustomSelect = (props: CustomSelectProps) => {
  const { options, handleOptionSelect, label } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSelect = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (item: CustomSelectOption) => {
    handleOptionSelect(item);
    handleCloseSelect();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Wrapper>
      <SelectButton onClick={handleOpenSelect}>
        <SelectButtonText>{label}</SelectButtonText>
        <SelectIconWrapper>
          <SelectIcon src={ChevronDownIcon} alt="arrow down icon" />
        </SelectIconWrapper>
      </SelectButton>
      <CustomPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseSelect}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {options.map(({ label, value }, index) => (
          <SelectOptionItem
            key={`${value}-${index}`}
            onClick={() => handleSelectItem({ label, value })}
          >
            {label}
          </SelectOptionItem>
        ))}
      </CustomPopover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const CustomPopover = MuiStyled(Popover)(() => ({
  [`&.${popoverClasses.root}`]: {
    width: "100%",
  },
}));

const SelectButton = styled(Button)`
  background-color: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  padding: 10px 16px;
  border-radius: 8px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const SelectButtonText = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #344054;
  width: 100px;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const SelectIconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const SelectIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const SelectOptionItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 1px solid #d0d5dd;
  font-weight: 500;
  font-size: 14px;
  color: #344054;

  &:last-child {
    border-bottom: none;
  }
`;
