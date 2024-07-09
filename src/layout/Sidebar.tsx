import { Divider, Layout, Menu, Typography } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const sidebarItems = [
  { label: "Add Project", to: "/" },
  { label: "Add Skill", to: "/addSkill" },
  { label: "Add Experience", to: "/addExperience" },
  { label: "Add Blog", to: "/addBlog" },
].map((item, index) => ({
  key: String(index + 1),
  label: <NavLink to={item.to}>{item.label}</NavLink>,
}));

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#FF8F00" }}>
        PORTFOLIO DASHBOARD
      </h1>
      <Menu
        style={{ marginTop: "56px", paddingLeft: "8px", paddingRight: "8px" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
