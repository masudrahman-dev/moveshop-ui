import React, { useState } from "react";
import CollapsibleWrapper from "../collapsible-wrapper/index";

const SidebarLeftTop = () => {
  const [collapsibleStates, setCollapsibleStates] = useState<{
    [key: string]: boolean;
  }>({
    collapsible1: true,
    collapsible2: true,
    collapsible3: true,
    collapsible4: true,
    collapsible5: false,
    collapsible6: false,
    collapsible7: false,
    collapsible8: false,
  });

  const handleCollapsibleStateChange = (
    collapsibleKey: string,
    isOpen: boolean
  ) => {
    setCollapsibleStates((prevState) => {
      const newState = {
        ...prevState,
        [collapsibleKey]: isOpen,
      };

      return newState;
    });
  };

  return (
    <div className="flex flex-col  gap-5">
      {[...Array(8)].map((_, index) => (
        <CollapsibleWrapper
          key={index}
          collapsibleKey={`collapsible${index + 1}`}
          isOpen={collapsibleStates[`collapsible${index + 1}`]}
          onStateChange={handleCollapsibleStateChange}
        >
          <p>Content for Collapsible {index + 1}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro
            iste .
          </p>
        </CollapsibleWrapper>
      ))}
    </div>
  );
};

export default SidebarLeftTop;
