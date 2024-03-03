import React, { useState } from "react";

const AccordionExample = () => {
  const [accordionItems, setAccordionItems] = useState<{
    [key: string]: boolean;
  }>({
    section1: true,
    section2: false,
    section3: false,
  });

  const toggleAccordion = (key: string) => {
    setAccordionItems({
      ...Object.fromEntries(
        Object.entries(accordionItems).map(([k]) => [k, false])
      ),
      [key]: true,
    });
  };

  return (
    <div>
      <div onClick={() => toggleAccordion("section1")}>
        Section 1{accordionItems.section1 && <div>Content for section 1</div>}
      </div>
      <div onClick={() => toggleAccordion("section2")}>
        Section 2{accordionItems.section2 && <div>Content for section 2</div>}
      </div>
      <div onClick={() => toggleAccordion("section3")}>
        Section 3{accordionItems.section3 && <div>Content for section 3</div>}
      </div>
    </div>
  );
};

export default AccordionExample;
