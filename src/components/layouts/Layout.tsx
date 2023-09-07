import { useContext } from "react";
import History from "../History/History";
import style from "./styles.module.scss";
import { DrawerContext } from "../../context/DrawerContext";

export default function Layout({ children }: any) {
  const drawerContext = useContext(DrawerContext);
  return (
    <>
      <History isOpen={drawerContext?.isOpenDrawer || false} />

      <div className={style.wrapper}>
        <div className={style.content}>{children}</div>
      </div>
    </>
  );
}
