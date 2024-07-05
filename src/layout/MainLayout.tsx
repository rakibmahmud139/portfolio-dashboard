import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayouts = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content
          className="bg-gradient-to-r from-cyan-900 via-purple-900 to-slate-900 "
          style={{ overflow: "auto" }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: "rgb(216, 239, 211)",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;
