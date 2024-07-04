import React, { PropsWithChildren } from "react";
import s from "./Layout.module.css";

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;
