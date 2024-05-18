import { ReactNode, useMemo } from "react";
import styles from "./Reg.module.css";

export type RegProps = {
  title?: string;
  showTitle?: boolean;
  part: string;
};

const ecfrURL = (search: string) =>
  `https://ecfr.federalregister.gov/cfr-reference?cfr[date]=current&cfr[view_mode]=enhanced&cfr[reference]=${search}&button=`;

const Reg = ({ title = "14", showTitle = false, part }: RegProps) => {
  const url = useMemo(() => ecfrURL(`${title} CFR ${part}`), [title, part]);

  return (
    <a href={url} target="_new" className={styles.regContainer}>
      {showTitle ? `${title} CFR ${part}` : part}
    </a>
  );
};

export default Reg;
