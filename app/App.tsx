import { AccordionItem } from "../src/components/AccordionItem/AccordionItem";

import { accordionArray } from "../src/components/accordionArray";

import * as Accordion from '@radix-ui/react-accordion';

export const App = () => {
  const mapAccordion = accordionArray.map((item) => {
    return <AccordionItem {...item} key={item.id} />;
  });

  return (
    <>
      <div className="flex content-center flex-wrap flex-col h-screen my-30 gap-28">
        <p className="text-purple-600 font-bold text-5pxl text-center">
          Select a quiz topic
        </p>
        <Accordion.Root type='single' collapsible className="flex flex-col font-bold text-3xl justify-center border-t-2">
          {mapAccordion}
        </Accordion.Root>
      </div>
    </>
  );
};

export default App;
