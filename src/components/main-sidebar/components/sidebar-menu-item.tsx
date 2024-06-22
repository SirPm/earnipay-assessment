import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SidebarLink } from "../../../utils/constants";
import ChevronIcon from "../../../assets/svg/chevron-down-grey.svg";

interface SidebarMenuItemProps extends SidebarLink {}

export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const { icon, text, linkTo, hasMoreOptions } = props;
  const location = useLocation();

  return (
    <Wrapper $isactive={location.pathname === linkTo}>
      <IconTextWrapper>
        <IconWrapper>
          <Icon src={icon} alt={`${text}'s icon`} />
        </IconWrapper>
        <Text>{text}</Text>
      </IconTextWrapper>
      {hasMoreOptions && (
        <ArrowDownWrapper>
          <ArrowDownIcon src={ChevronIcon} alt="down arrow" />
        </ArrowDownWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isactive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.$isactive ? "#00535C" : "")};
  color: ${(props) => (props.$isactive ? "#ffffff" : "#4a5564")};
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-top: 1px;
  margin-left: 13px;
`;

const ArrowDownWrapper = styled.div`
  cursor: pointer;
  display: flex;
`;

const ArrowDownIcon = styled.img``;
