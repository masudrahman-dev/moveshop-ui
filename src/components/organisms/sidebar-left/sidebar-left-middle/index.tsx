import React, { useState } from "react";
import CollapsibleWrapper from "../collapsible-wrapper";

const SidebarLeftMiddle: React.FC = () => {
  const [collapsibleStates, setCollapsibleStates] = useState<{
    [key: string]: boolean;
  }>({
    collapsible1: false,
    collapsible2: false,
  });

  const handleCollapsibleStateChange = (
    collapsibleKey: string,
    isOpen: boolean
  ) => {
    setCollapsibleStates((prevState) => {
      console.log("prevState :>> ", prevState);

      const newState = {
        ...prevState,
        [collapsibleKey]: isOpen,
      };

      console.log("newState :>> ", newState);
      return newState;
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      {[...Array(2)].map((_, index) => (
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

export default SidebarLeftMiddle;
