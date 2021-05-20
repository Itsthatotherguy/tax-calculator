import { FC, useState } from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Space,
  message,
  DatePicker,
  Typography,
  Divider,
} from "antd";

import PageHeader from "../../UI/PageHeader/PageHeader";

import TaxCalculatorService, {
  CalculateTaxDto,
} from "../../../services/TaxCalculatorService";
import { TaxSummaryInfo } from "../TaxCalculator";

import numeral from "numeral";
import moment, { Moment } from "moment";

const { Text } = Typography;

interface FormValues {
  name: string;
  dateOfBirth: Moment;
  monthlySalary: string;
  hasMedicalAid: boolean;
  medicalAidDependents: number;
}

interface Props {
  onTaxCalculated: (taxSummaryInfo: TaxSummaryInfo | null) => void;
}

const initialFormValues: FormValues = {
  dateOfBirth: moment(new Date()),
  name: "",
  monthlySalary: "0.00",
  hasMedicalAid: false,
  medicalAidDependents: 0,
};

const DetailForm: FC<Props> = ({ onTaxCalculated }) => {
  const [hasMedicalAid, setHasMedicalAid] = useState(
    initialFormValues.hasMedicalAid
  );
  const [form] = Form.useForm();

  const handleHasMedicalAidToggle = () => {
    if (hasMedicalAid) {
      resetMedicalAidDependents();
    } else {
      initMedicalAidDependents();
    }

    setHasMedicalAid(!hasMedicalAid);
  };

  const initMedicalAidDependents = () => {
    const currentFormValues: FormValues = form.getFieldsValue();
    form.setFieldsValue({
      ...currentFormValues,
      medicalAidDependents: 1,
    });
  };

  const resetMedicalAidDependents = () => {
    const currentFormValues: FormValues = form.getFieldsValue();
    form.setFieldsValue({
      ...currentFormValues,
      medicalAidDependents: 0,
    });
  };

  const formatSalary = (): void => {
    const currentFormValues: FormValues = form.getFieldsValue();
    const formattedMonthlySalary = numeral(
      currentFormValues.monthlySalary
    ).format("0,0.00");

    form.setFieldsValue({
      ...currentFormValues,
      monthlySalary: formattedMonthlySalary,
    });
  };

  const handleFinish = (values: FormValues) => {
    const {
      dateOfBirth,
      hasMedicalAid,
      medicalAidDependents,
      monthlySalary,
      name,
    } = values;

    const dto: CalculateTaxDto = {
      dateOfBirth,
      monthlySalary: numeral(monthlySalary).value() as number,
      medicalAidDependents: hasMedicalAid ? medicalAidDependents : 0,
    };

    const taxResponse = TaxCalculatorService.calculateTax(dto);

    onTaxCalculated({
      ...taxResponse,
      name,
    });
  };

  const handleFinishFailed = (errorInfo: any) => {
    message.error(
      "The form contains invalid input. Please correct these and try again."
    );
  };

  const handleReset = () => {
    form.resetFields();
    setHasMedicalAid(false);
    onTaxCalculated(null);
  };

  return (
    <>
      <PageHeader title="Your details" />

      <Text style={{ margin: 0 }}>
        Please complete this form and click the button below to calculate your
        tax.
      </Text>

      <Divider />

      <Form
        layout="vertical"
        form={form}
        initialValues={initialFormValues}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Please enter your date of birth.",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Monthly Salary"
          name="monthlySalary"
          rules={[
            { required: true },
            () => ({
              validator(_, value) {
                const numeralValue = numeral(value).value();

                if (numeralValue && numeralValue > 0) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The amount cannot be less or equal to 0.00")
                );
              },
            }),
          ]}
          extra="This is your salary before tax and UIF is deducted."
        >
          <Input onBlur={formatSalary} />
        </Form.Item>

        <Form.Item name="hasMedicalAid" valuePropName="checked">
          <Checkbox onChange={handleHasMedicalAidToggle}>
            Do you have medical aid?
          </Checkbox>
        </Form.Item>

        {hasMedicalAid && (
          <Form.Item
            label="Medical Aid Dependents"
            name="medicalAidDependents"
            rules={[
              {
                required: true,
                message:
                  "Please enter number of dependents on your medical aid.",
              },
            ]}
            extra="Please enter the amount of dependents that you have on your medical aid, including yourself."
          >
            <InputNumber min={1} step={1} precision={0} />
          </Form.Item>
        )}

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Calculate
            </Button>
            <Button htmlType="button" onClick={handleReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default DetailForm;
