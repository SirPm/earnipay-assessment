import React from "react";
import styled from "styled-components";
import ProfilePic from "../../../assets/svg/profile-picture.svg";
import ChevronDownBlack from "../../../assets/svg/chevron-down-black.svg";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

export const UserProfileInfo = () => {
  return (
    <Wrapper>
      <UserProfileWrapper>
        <ProfilePicWrapper>
          <ProfilePicIcon src={ProfilePic} alt="user profile picture" />
        </ProfilePicWrapper>
        <UserInfo>
          <UserName>Laolu Oyedele</UserName>
          <UserEmail>Laoluoyedele@earnipay.com</UserEmail>
        </UserInfo>
      </UserProfileWrapper>
      <ArrowDownWrapper>
        <ArrowDownIcon src={ChevronDownBlack} alt="down arrow icon" />
      </ArrowDownWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 28%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) {
    max-width: 15%;
    justify-content: center;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 50%;
    justify-content: space-between;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.XSM}) {
    display: none;
  }
`;

const UserProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProfilePicWrapper = styled.div``;

const ProfilePicIcon = styled.img``;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  word-break: break-all;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) {
    display: none;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    display: flex;
  }
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #4a5564;
`;

const UserEmail = styled.p`
  font-size: 12px;
  color: #9ca3af;
`;

const ArrowDownWrapper = styled.div`
  height: 24px;
  cursor: pointer;
`;

const ArrowDownIcon = styled.img`
  width: 100%;
  height: 100%;
`;
