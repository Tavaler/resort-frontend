import { Layout, theme } from "antd";
// import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

const LayoutPubilc = ({ children }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const navigate = useNavigate();
  return (
    <Layout >
        <Navbar />
      <div
        style={{
          margin: " 16px",
          padding: 24,
          minHeight: "100%",
          background: colorBgContainer,
          backgroundColor: "#fcfcfc",
        }}
      >
        {children}
      </div>
      <Footer />
    </Layout>
  );
};

export default LayoutPubilc;