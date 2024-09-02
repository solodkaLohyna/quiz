import { Layout, Menu, Button, ConfigProvider, Space } from 'antd';
import { Link } from "react-router-dom";
import { useUser } from "../src/contexts/UserContext";
const { Header } = Layout;

export const UserHeader = () => {

  const { user, logout } = useUser();

  return (
    <ConfigProvider
      theme={{
        token: { padding: 5 },
        components: {
          Button: {
            defaultBg: "#9333ea",
            defaultHoverBorderColor: "#9333ea",
            defaultHoverColor: "#9333ea",
            defaultShadow: "0 0 0 2px rgba(147, 51, 234, 0.1)",

            colorPrimary: "#FFFFFF",
            colorPrimaryHover: "#9333ea",
            colorPrimaryActive: "#9333ea",
            primaryShadow: "0 0 0 2px rgba(147, 51, 234, 0.1)"
          }
        }
      }}>
      <Header className="flex justify-between items-center bg-white shadow-md px-4">
        <div className=" text-3xl font-bold"><p>👋<span className='text-purple-600'>Quiz</span>Time</p></div>
        <Menu selectable={false} mode="horizontal" className="border-none">
          <Space>
            {user ? (user === 'admin' ? (
              <>
                <Menu.Item>
                  <span>Welcome, Admin!</span>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    size="large"
                    className="text-white"
                    type="default"
                    onClick={logout}>
                    Exit
                  </Button>
                </Menu.Item>
              </>
            ) :
              (
                <>
                  <Menu.Item>
                    <span>Welcome, {user}</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Button
                      size="large"
                      className="text-white"
                      type="default"
                      onClick={logout}>
                      Exit
                    </Button>
                  </Menu.Item>
                </>
              ))
              : (
                <>
                  <Menu.Item>
                    <Button
                      size="large"
                      className="text-purple-600 border-slate-200"
                      type="primary">
                      <Link to={`/registration`}>Registration</Link>
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button
                      size="large"
                      className="text-white"
                      type="default">
                      <Link to={`/login`}>Login</Link>
                    </Button>
                  </Menu.Item>
                </>
              )}
          </Space>
        </Menu>
      </Header>
    </ConfigProvider>
  )
}