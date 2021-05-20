import { FC } from "react";

import { Descriptions } from "antd";

import numeral from "numeral";

interface Props {
  title: string;
  lineData: DescriptionLine[];
}

export interface DescriptionLine {
  label: string;
  amount?: number;
  bold?: boolean;
}

const AmountDescriptions: FC<Props> = ({ title, lineData }) => {
  const descriptionLines: JSX.Element[] = lineData.map((line) => (
    <Descriptions.Item
      label={line.label}
      contentStyle={{
        textAlign: "end",
        fontWeight: line.bold ? "bold" : "normal",
      }}
    >
      {numeral(line.amount).format("0,0.00")}
    </Descriptions.Item>
  ));

  return (
    <Descriptions title={title} bordered column={1}>
      {descriptionLines}
    </Descriptions>
  );
};

export default AmountDescriptions;
