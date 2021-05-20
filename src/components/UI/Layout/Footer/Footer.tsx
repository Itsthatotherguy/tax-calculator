import { FC } from "react";
import { Layout } from "antd";
import classes from "./Footer.module.css";

const { Footer: AntFooter } = Layout;

const Footer: FC = () => {
  return (
    <AntFooter className={classes.footer}>
      Developed by{" "}
      <a
        href="https://github.com/itsthatotherguy"
        target="_blank"
        rel="noreferrer"
      >
        Christiaan van der Merwe
      </a>
    </AntFooter>
  );
};

export default Footer;
