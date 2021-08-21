import { ReactNode } from "react";
import styled from "styled-components";

export type CardProps = {
  children: ReactNode;
};

const CardContainer = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 0.25em;
  padding-top: 0px;
  padding: 1em;
`;

const Card = ({ children }: CardProps) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
