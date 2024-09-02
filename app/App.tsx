import { AccordionItem } from "../src/components/AccordionItem/AccordionItem";
import { accordionArray } from "../src/components/accordionArray";
import * as Accordion from '@radix-ui/react-accordion';
import { ConfigProvider } from "antd";
import { UserHeader } from './UserHeader'
import { useUser } from "../src/contexts/UserContext";
import { AdminPanel } from "../src/components/AdminPanel/AdminPanel";

export const DefaultPage = () => {
  const mapAccordion = accordionArray.map((item) => {
    return <AccordionItem {...item} key={item.id} />;
  });

  return (
    <div className="flex content-center flex-wrap flex-col h-screen my-20 gap-28" >
      <p className="text-purple-600 font-bold text-5pxl text-center">
        Select a quiz topic
      </p>
      <Accordion.Root type='single' collapsible className="flex flex-col font-bold text-3xl justify-center border-t-2">
        {mapAccordion}
      </Accordion.Root>
    </div >)
}

export const App = () => {
  const { user } = useUser();
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
      <UserHeader />
      {user === 'admin' ? <AdminPanel /> : <DefaultPage />}
    </ConfigProvider >
  );
};

export default App;
