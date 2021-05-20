import { Divider } from "antd";
import { FC, useState } from "react";
import { TaxCalculatorResponse } from "../../services/TaxCalculatorService";
import DetailForm from "./DetailForm/DetailForm";
import TaxSummary from "./TaxSummary/TaxSummary";

export interface TaxSummaryInfo extends TaxCalculatorResponse {
  name: string;
}

const TaxCalculator: FC = () => {
  const [taxSummary, setTaxSummary] = useState<TaxSummaryInfo | null>(null);

  return (
    <>
      <DetailForm onTaxCalculated={setTaxSummary} />
      {taxSummary && (
        <>
          <Divider />
          <TaxSummary taxSummary={taxSummary} />
        </>
      )}
    </>
  );
};

export default TaxCalculator;
