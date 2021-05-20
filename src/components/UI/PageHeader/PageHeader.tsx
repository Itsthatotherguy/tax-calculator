import { FC } from "react";

import { PageHeader as AntPageHeader } from "antd";

import classes from "./PageHeader.module.css";

interface Props {
  title: string;
}

const PageHeader: FC<Props> = ({ title }) => {
  return <AntPageHeader title={title} className={classes.pageHeader} />;
};

export default PageHeader;
