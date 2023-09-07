import style from "./styles.module.scss";

export default function Layout({ children }: any) {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>{children}</div>
    </div>
  );
}
