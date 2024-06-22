import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Input } from "../styled-components";
import SearchIcon from "../../assets/svg/search-icon.svg";
import NotificationIcon from "../../assets/svg/notification.svg";
import { UserProfileInfo } from "./components/user-profile-info";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { RESPONSIVE_SIZE } from "../../utils/constants";

export const MainHeader = () => {
  const location = useLocation();
  React.useEffect(() => console.log(location, "location"), [location]);
  return (
    <Wrapper>
      <Title>
        {capitalizeFirstLetter(
          location.pathname.slice(1, location.pathname.length)
        )}
      </Title>
      <SearchInputWrapper>
        <SearchInputIcon src={SearchIcon} alt="search icon" />
        <SearchInput placeholder="Search..." />
      </SearchInputWrapper>
      <NotificationsWrapper>
        <Notification src={NotificationIcon} alt="notification icon" />
      </NotificationsWrapper>
      <UserProfileInfo />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 90%;
    margin-left: 10%;
    padding: 0 15px 0;
  }
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #374151;

  @media screen and (max-width: ${RESPONSIVE_SIZE.XSM}) {
    margin-left: 10%;
    font-weight: bold;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 42.4%;
  height: fit-content;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    display: none;
  }
`;

const SearchInput = styled(Input)`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 8px;
  width: 100%;
  border: none;
  padding-left: 40px;
  height: 40px;
`;

const SearchInputIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
`;

const NotificationsWrapper = styled.div`
  width: 100%;
  max-width: 8.7%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0.5px;
    height: 19px;
    background-color: #9ca3af;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    display: none;
  }
`;

const Notification = styled.img`
  width: 24px;
  margin-top: -6px;
`;
