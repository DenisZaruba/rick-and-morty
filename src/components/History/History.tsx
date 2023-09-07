import { Drawer } from "@mui/material";
import React, { useState } from "react";

export default function History({ isOpen }: { isOpen: boolean }) {
  // const [state,setState] = useState('right')
  // const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event.type === "keydown" &&
  //     ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  return (
    <Drawer
      anchor={"right"}
      open={isOpen}
      // onClose={toggleDrawer(anchor, false)}
    >
      1
    </Drawer>
  );
}
