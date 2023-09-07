import styles from "./styles.module.scss";
import { Episode } from "../../store/types/homeTypes";

export default function EpisodesItem({ data }: { data: Episode }) {
  return (
    <div className={styles.location}>
      <div className={styles.location__body}>
        <h3>{data.name}</h3>
        <div className={styles.location__body_flex}>
          <span>{data.episode}</span>
        </div>
        <div className={styles.location__body_item}>
          <h5>Episode:</h5>
          <p>{data.episode}</p>
        </div>
        <div className={styles.location__body_item}>
          <h5>Characters:</h5>
          <p>{data.characters.join(",")}</p>
        </div>
      </div>
    </div>
  );
}
