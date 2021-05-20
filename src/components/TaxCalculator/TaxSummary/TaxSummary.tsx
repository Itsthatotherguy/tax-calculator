import { FC } from "react";

import { Result, Space } from "antd";

import PageHeader from "../../UI/PageHeader/PageHeader";

import { TaxSummaryInfo } from "../TaxCalculator";

import AmountDescriptions, {
  DescriptionLine,
} from "./AmountDescriptions/AmountDescriptions";

interface Props {
  taxSummary: TaxSummaryInfo | null;
}

const TaxSummary: FC<Props> = ({ taxSummary }) => {
  const payDescriptionLineData: DescriptionLine[] = [
    { label: "Annual salary", amount: taxSummary?.annualSalary },
    { label: "Tax before deductions", amount: taxSummary?.initialTax },
    { label: "Tax rebate", amount: taxSummary?.taxRebates?.total },
    { label: "Medical tax credit", amount: taxSummary?.medicalTaxCredit },
    {
      label: "Total tax payable",
      amount: taxSummary?.totalTaxLiability,
      bold: true,
    },
  ];

  const receiveDescriptionLineData: DescriptionLine[] = [
    { label: "Monthly salary", amount: taxSummary?.monthlySalary },
    { label: "Monthly PAYE", amount: taxSummary?.monthlyPaye },
    { label: "Monthly UIF", amount: taxSummary?.monthlyUif },
    {
      label: "Monthly nett salary",
      amount: taxSummary?.monthlyNettSalary,
      bold: true,
    },
  ];

  return (
    <>
      <PageHeader title="Your Tax Summary" />
      {taxSummary?.isAboveTaxThreshold ? (
        <>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <AmountDescriptions
              title="Here's what you'll pay"
              lineData={payDescriptionLineData}
            />
            <AmountDescriptions
              title="Here's what you'll receive"
              lineData={receiveDescriptionLineData}
            />
          </Space>
        </>
      ) : (
        <Result subTitle="You are under the tax threshold for your age and thus you aren't liable for any tax." />
      )}
    </>
  );
};

export default TaxSummary;
