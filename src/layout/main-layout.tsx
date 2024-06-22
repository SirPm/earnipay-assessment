import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import { paperClasses } from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { styled as MuiStyled } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import HamburgerIcon from "../assets/svg/hamburger.svg";
import { MainSidebar } from "../components/main-sidebar";
import { MainHeader } from "../components/main-header";
import { RESPONSIVE_SIZE } from "../utils/constants";

export const MainLayout = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobileScreen = useMediaQuery(`(max-width:${RESPONSIVE_SIZE.SM})`);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      {isMobileScreen ? (
        <>
          <CustomIconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon src={HamburgerIcon} alt="menu icon" />
          </CustomIconButton>
          <CustomDrawer open={isOpen} onClose={handleDrawerToggle}>
            <MainSidebar />
          </CustomDrawer>
        </>
      ) : (
        <MainSidebar />
      )}
      <MainSection>
        <MainHeader />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const MainSection = styled.section`
  width: 100%;
  max-width: 75%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 100%;
  }
`;

const MainContent = styled.main`
  background-color: #f6f6f6;
  min-height: calc(100vh - 60px);
`;

const CustomIconButton = MuiStyled(IconButton)(() => ({
  position: "absolute",
  top: 11.5,
  left: 10,
}));

const CustomDrawer = MuiStyled(Drawer)(() => ({
  [`& .${paperClasses.root}`]: {
    width: "100%",
    maxWidth: "60%",
  },
}));

const MenuIcon = styled.img`
  width: 25px;
`;
