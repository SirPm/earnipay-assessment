import React from "react";
import styled from "styled-components";
import Logo from "../../assets/svg/logo-1.svg";
import {
  SIDEBAR_HEADER_LINKS,
  SIDEBAR_FOOTER_LINKS,
  RESPONSIVE_SIZE,
} from "../../utils/constants";
import { SidebarMenuItem } from "./components/sidebar-menu-item";

export const MainSidebar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg src={Logo} alt="earnipay logo" />
      </LogoWrapper>
      <SidebarLinksWrapper>
        <HeaderLinksWrapper>
          {SIDEBAR_HEADER_LINKS.map((headerLinkItem, index) => (
            <SidebarMenuItem
              key={`${headerLinkItem.text}-${index}`}
              {...headerLinkItem}
            />
          ))}
        </HeaderLinksWrapper>
        <FooterLinksWrapper>
          {SIDEBAR_FOOTER_LINKS.map((headerLinkItem, index) => (
            <SidebarMenuItem
              key={`${headerLinkItem.text}-${index}`}
              {...headerLinkItem}
            />
          ))}
        </FooterLinksWrapper>
      </SidebarLinksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  color: #4a5564;
  border: none;
  border-right: 1px solid #e5e7eb;
  min-height: 100vh;
  width: 100%;
  max-width: 25%;
  padding: 20px;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 100%;
  }
`;

const LogoWrapper = styled.div`
  box-shadow: 0px 0px 1px 0px #00000026;
  border-radius: 12px;
  padding: 8px;
`;

const LogoImg = styled.img``;

const SidebarLinksWrapper = styled.div`
  min-height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderLinksWrapper = styled.div`
  margin-top: 1.3rem;
`;

const FooterLinksWrapper = styled.div``;
