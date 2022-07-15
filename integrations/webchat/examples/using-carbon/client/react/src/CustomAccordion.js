import { Accordion, AccordionItem } from 'carbon-components-react';

/**
 * This is the component for out custom response. It just renders an Accordion from Carbon. You can also pass the
 * message to this component and use the data from the message to render this if you want the content to be provide
 * by the assistant.
 */
function CustomAccordion() {
  return (
    <Accordion>
      <AccordionItem title="The Everyday Card">
        $300 bonus plus 5% gas station cash back offer. Earn 2% cash back on all other purchases.
      </AccordionItem>
      <AccordionItem title="The Preferred Card">
        $300 bonus plus 5% gas station cash back offer. Earn 5% cash back on all other purchases.
      </AccordionItem>
      <AccordionItem title="The Topaz Card">
        $90 Annual fee. Earn 120,000 bonus points. Earn additional points on every purchase.
      </AccordionItem>
    </Accordion>
  );
}

export { CustomAccordion };
