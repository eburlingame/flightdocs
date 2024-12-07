import { ReactNode, useMemo } from "react";
import styles from "./AIM.module.css";

export type AIMProps = {
  chapter: string;
};

const aimURl = (para: string) => {
  const [chapter, section, paragraph] = para.split("-");
  return `https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap${chapter}_section_${section}.html#$paragraph${para}`;
};

const AIM = ({ chapter }: AIMProps) => {
  const url = aimURl(chapter);

  return (
    <a href={url} target="_new" className={styles.aimContainer}>
      AIM {chapter}
    </a>
  );
};

export default AIM;
