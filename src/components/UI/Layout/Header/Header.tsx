import { FC } from "react";
import { Layout, Typography, Button } from "antd";
import { GithubFilled } from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  return (
    <AntHeader
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <Title level={4} style={{ color: "#fff", marginBottom: 0 }}>
        Tax Calculator
      </Title>
      <Button
        icon={<GithubFilled />}
        shape="circle"
        href="https://github.com/Itsthatotherguy/tax-calculator"
      ></Button>
    </AntHeader>
  );
};

export default Header;
