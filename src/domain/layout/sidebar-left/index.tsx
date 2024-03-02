import React, { useState } from "react";
import Collapsible from "react-collapsible";

const CollapsibleWrapper = ({
  collapsibleKey,
  isOpen,
  onStateChange,
  children,
}) => {
  const handleOpening = () => {
    onStateChange(collapsibleKey, true);
  };

  const handleClosing = () => {
    onStateChange(collapsibleKey, false);
  };
  return (
    <div>
      <Collapsible
        transitionTime={150}
        transitionCloseTime={150}
        trigger={
          <>
            <div className="border flex justify-between p-2">
              <span> Collapsible {collapsibleKey.split("collapsible")[1]}</span>
              <span>{isOpen ? "open" : "closed"}</span>
            </div>
          </>
        }
        open={isOpen}
        onTriggerOpening={handleOpening}
        onTriggerClosing={handleClosing}
      >
        {children}
      </Collapsible>
    </div>
  );
};

const SidebarLeft = () => {
  const [collapsibleStates, setCollapsibleStates] = useState({
    collapsible1: true,
    collapsible2: true,
    collapsible3: true,
    collapsible4: true,
    collapsible5: false,
    collapsible6: false,
    collapsible7: false,
    collapsible8: false,
  });

  const handleCollapsibleStateChange = (collapsibleKey: any, isOpen: any) => {
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
    <div className="w-80 bg-gray-50  overflow-y-auto lg:block">
      <div className=" w-72 p-3 h-full flex flex-col gap-3">
        <div className="flex flex-col  gap-5">
          {[...Array(8)].map((_, index) => (
            <CollapsibleWrapper
              key={index}
              collapsibleKey={`collapsible${index + 1}`}
              // @ts-ignore
              isOpen={collapsibleStates[`collapsible${index + 1}`]}
              onStateChange={handleCollapsibleStateChange}
            >
              <p>Content for Collapsible {index + 1}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                porro iste .
              </p>
            </CollapsibleWrapper>
          ))}
        </div>

        <div className="flex flex-col gap-5 mt-12">
          {[...Array(2)].map((_, index) => (
            <CollapsibleWrapper
              key={index}
              collapsibleKey={`collapsible${index + 1}`}
              // @ts-ignore
              isOpen={collapsibleStates[`collapsible${index + 1}`]}
              onStateChange={handleCollapsibleStateChange}
            >
              <p>Content for Collapsible {index + 1}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                porro iste .
              </p>
            </CollapsibleWrapper>
          ))}
        </div>
        <div className="h-full"></div>

        <div className="flex flex-col gap-5">
          {[...Array(2)].map((_, index) => (
            <CollapsibleWrapper
              key={index}
              collapsibleKey={`collapsible${index + 1}`}
              // @ts-ignore
              isOpen={collapsibleStates[`collapsible${index + 1}`]}
              onStateChange={handleCollapsibleStateChange}
            >
              <p>Content for Collapsible {index + 1}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                porro iste .
              </p>
            </CollapsibleWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
