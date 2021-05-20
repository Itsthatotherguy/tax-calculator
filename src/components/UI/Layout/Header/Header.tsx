import { FC } from "react";
import { Layout, Typography, Button } from "antd";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  return (
    <AntHeader
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Title level={4} style={{ color: "#fff", marginBottom: 0 }}>
        Tax Calculator
      </Title>
      <Button href="https://github.com/itsthatotherguy.com/tax-calculator">
        View Repository
      </Button>
    </AntHeader>
  );
};

export default Header;
