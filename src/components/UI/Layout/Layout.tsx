import { FC } from "react";
import { Layout as AntLayout } from "antd";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import classes from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <AntLayout className={classes.layout}>
      <Header />
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </AntLayout>
  );
};

export default Layout;
