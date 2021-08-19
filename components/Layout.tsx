import { ReactNode } from "react";
import styled from "styled-components";

export type LayoutProps = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`;

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;
