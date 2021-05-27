import { FC } from "react";

import { Layout, Row, Col } from "antd";
import classes from "./Content.module.css";

const { Content: AntContent } = Layout;

const Content: FC = ({ children }) => {
  return (
    <AntContent>
      <Row justify="center">
        <Col sm={24} md={12} className={classes.content}>
          {children}
        </Col>
      </Row>
    </AntContent>
  );
};

export default Content;
