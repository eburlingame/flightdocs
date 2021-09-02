import { ReactNode, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/global";

const EncodedDataExplainerContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 0.25em;
  padding-top: 0px;
  padding: 1em;
`;

const WordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Newline = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const EncodedDataWord = styled.pre<{ isSelected: boolean; indent?: number }>`
  text-decoration: underline;
  color: ${theme.colors.orange};
  margin-right: 0.5em;

  margin-left: ${(props) =>
    props.indent ? `${props.indent * 2}em` : "inherit"};

  font-weight: ${(props) => (props.isSelected ? "700" : "inherit")};
`;

const ExplanationContainer = styled.div``;

export type EncodedDataExplainerWord = {
  text: ReactNode;
  meaning: ReactNode;
  newLine?: boolean;
  indent?: number;
};

export type EncodedDataExplainerProps = {
  words: EncodedDataExplainerWord[];
};

const EncodedDataExplainer = ({ words }: EncodedDataExplainerProps) => {
  const [selected, setSelected] = useState(-1);

  return (
    <EncodedDataExplainerContainer>
      <WordsContainer>
        {words.map(({ text, newLine, indent }, index) => (
          <>
            {newLine && <Newline />}

            <EncodedDataWord
              key={index}
              onClick={() => setSelected(index)}
              onMouseOver={() => setSelected(index)}
              isSelected={selected === index}
              indent={indent}
            >
              {text}
            </EncodedDataWord>
          </>
        ))}
      </WordsContainer>

      {selected >= 0 && (
        <ExplanationContainer>{words[selected].meaning}</ExplanationContainer>
      )}
    </EncodedDataExplainerContainer>
  );
};

export default EncodedDataExplainer;
