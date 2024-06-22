import React from "react";
import styled from "styled-components";

interface ScrollAreaProps {
  height: string;
  children: React.ReactNode;
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const { height, children } = props;
  return <Wrapper height={height}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  overflow-y: auto;

  /* Hide scrollbar by default */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    width: 0; /* WebKit */
    height: 0;
  }

  /* Show scrollbar on hover */
  &:hover {
    scrollbar-width: auto; /* Firefox */
    -ms-overflow-style: auto; /* IE and Edge */
    &::-webkit-scrollbar {
      width: 8px; /* WebKit */
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;
