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
      <Button>
        <a href="https://github.com/Itsthatotherguy/tax-calculator">
          View Repository
        </a>
      </Button>
    </AntHeader>
  );
};

export default Header;
