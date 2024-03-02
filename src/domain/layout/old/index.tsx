import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import SideMenuItem from "./side-menu-item/index";
const SidebarLeft = () => {
  const [currentlyOpen, setCurrentlyOpen] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const triggerHandler = () => {
    const id = triggerHandler.id++;
    return {
      open: currentlyOpen === id,
      handleTriggerClick: () => setCurrentlyOpen(id),
    };
  };
  // We store the `id` counter on the function object, as a state creates
  // infinite updates, and we do not want the variable to be free floating.
  triggerHandler.id = 0;
  console.count("reactive");

  // useEffect(() => {
  //   console.log("currentlyOpen :>> ", currentlyOpen);
  //   console.log("t :>> ", { ...triggerHandler() });
  // }, [currentlyOpen]);

  const onHandler = () => {
    setIsOpen(!isOpen);
  };

  // State to track which collapsible items are open
  const [openItems, setOpenItems] = useState([
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
  ]);

  // Function to toggle the state of a collapsible item
  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  const [collapsibleState, setCollapsibleState] = useState({
    collapsible1: true,
    collapsible2: true,
    collapsible3: true,
    collapsible4: true,
    collapsible5: false,
    collapsible6: false,
    collapsible7: false,
    collapsible8: false,
  });
  const toggleCollapsible = (collapsibleKey) => {
    console.log("collapsibleKey :>> ", collapsibleKey);
    setCollapsibleState((prevState) => ({
      ...prevState,
      [collapsibleKey]: !prevState[collapsibleKey],
    }));
  };

  return (
    <div className="">
      <div className="border w-72 p-3 h-full flex flex-col gap-3">
        {/* <SideMenuItem /> */}

        <div className="flex flex-col gap-5">
          {/* Collapsible items */}
          {/* {[...Array(8)].map((_, index) => (
            <Collapsible
              key={index}
              transitionTime={150}
              transitionCloseTime={150}
              trigger={
                <>
                  <div className="flex justify-between border p-2">
                    <span>{`Item ${index + 1}`}</span>
                    <span>{"up"}</span>
                  </div>
                </>
              }
              open={openItems[index]}
              onTriggerOpening={() => toggleItem(index)}
              onTriggerClosing={() => toggleItem(index)}
            >
              <p>Content for item {index + 1}</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                quae assumenda iure magnam reprehenderit repudiandae iste
              </p>
            </Collapsible>
          ))} */}

          {[...Array(8)].map((_, index) => (
            <Collapsible
              key={index}
              transitionTime={150}
              transitionCloseTime={150}
              trigger={`Collapsible ${index + 1}`}
              open={collapsibleState[`collapsible${index + 1}`]}
              onTriggerOpening={() =>
                toggleCollapsible(`collapsible${index + 1}`)
              }
              onTriggerClosing={() =>
                toggleCollapsible(`collapsible${index + 1}`)
              }
            >
              <p>Content for Collapsible {index + 1}</p>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
