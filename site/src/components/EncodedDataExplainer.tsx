import { ReactNode, useState } from "react";
import style from "./EncodedDataExplainer.module.css";

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
    <div className={style.encodedDataExplainerContainer}>
      <div className={style.wordsContainer}>
        {words.map(({ text, newLine, indent }, index) => (
          <>
            {newLine && <div className={style.newline} />}

            <pre
              style={{
                marginLeft: indent ? `${indent * 2}em` : "inherit",
                fontWeight: selected === index ? "700" : "inherit",
              }}
              key={index}
              onClick={() => setSelected(index)}
              onMouseOver={() => setSelected(index)}
            >
              {text}
            </pre>
          </>
        ))}
      </div>

      {selected >= 0 && <div>{words[selected].meaning}</div>}
    </div>
  );
};

export default EncodedDataExplainer;
