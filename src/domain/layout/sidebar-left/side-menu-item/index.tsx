import React from "react";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";

const SideMenuItem = () => {
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

  const onHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Collapsible
      tabIndex={2}
      transitionTime={150}
      transitionCloseTime={150}
      open={isOpen}
      handleTriggerClick={onHandler}
      trigger={
        <>
          <div className="flex justify-between border p-2">
            <h1>item</h1>
            <span>{isOpen ? "down" : "up"}</span>
          </div>
        </>
      }
    >
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
  );
};

export default SideMenuItem;
