import { ReactComponent as VerticalSvg } from "./../../assets/icons/verticalIcon.svg";
import styles from "./styles.module.scss";

export default function Fab({ isMain }: { isMain: boolean }) {
  return (
    <div className={styles.wrapper}>
      <VerticalSvg />
    </div>
  );
}
