import { ReactNode } from "react";
import styled from "styled-components";

export type AcronymRowProps = {
  letter: ReactNode;
  title: ReactNode;
  notes?: ReactNode;
  reg?: ReactNode;
};

const LetterCell = styled.td`
  font-weight: 700;
  width: 1em;
`;
const TitleCell = styled.td``;
const NotesCell = styled.td``;

export const AcronymRow = ({ letter, title, notes, reg }: AcronymRowProps) => {
  return (
    <tr>
      <LetterCell>{letter}</LetterCell>
      <TitleCell>{title}</TitleCell>
      {notes && <NotesCell>{notes}</NotesCell>}
      {reg && <NotesCell>{reg}</NotesCell>}
    </tr>
  );
};

export type AcronymProps = {
  children: ReactNode;
};

const AcronymTable = styled.table`
  margin: inherit;
`;

const Acronym = ({ children }: AcronymProps) => {
  return (
    <AcronymTable>
      <tbody>{children}</tbody>
    </AcronymTable>
  );
};

export default Acronym;
