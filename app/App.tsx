import { Link } from "react-router-dom";
import { AccordionItem } from "../src/components/AccordionItem/AccordionItem";

import { accordionArray } from "../src/components/accordionArray";

import * as Accordion from '@radix-ui/react-accordion';
import { Layout, Menu, Button, ConfigProvider, Space } from 'antd';

const { Header } = Layout;
export const App = () => {
  const mapAccordion = accordionArray.map((item) => {
    return <AccordionItem {...item} key={item.id} />;
  });

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
          <Space >
            <Menu.Item>
              <Button
                size="large"
                htmlType='submit'
                className="text-purple-600 border-slate-200"
                type="primary">
                <Link to={`/registration`}>Registration</Link>
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button
                size="large"
                htmlType='submit'
                className="text-white"
                type="default">
                <Link to={`/login`}>Login</Link>
              </Button>
            </Menu.Item>
          </Space>
        </Menu>
      </Header>

      <div className="flex content-center flex-wrap flex-col h-screen my-30 gap-28">
        <p className="text-purple-600 font-bold text-5pxl text-center">
          Select a quiz topic
        </p>
        <Accordion.Root type='single' collapsible className="flex flex-col font-bold text-3xl justify-center border-t-2">
          {mapAccordion}
        </Accordion.Root>
      </div>
    </ConfigProvider >
  );
};

export default App;
