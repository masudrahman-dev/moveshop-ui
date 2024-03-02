import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";

const SidebarLeft = () => {


  const [currentlyOpen, setCurrentlyOpen] = useState(-1)

  const triggerHandler = () => {
    const id = triggerHandler.id++
    return {
      open: currentlyOpen === id,
      handleTriggerClick: () => setCurrentlyOpen(id),
    }
  }
  // We store the `id` counter on the function object, as a state creates
  // infinite updates, and we do not want the variable to be free floating.
  triggerHandler.id = 0



// useEffect(()=>{

//   const a = triggerHandler()

//   console.log('a :>> ', a);
// },[])


  return (
    <div className="">
      <div className="border w-72 p-3 h-full">
        <Collapsible
          transitionTime={150}
          transitionCloseTime={150}
          // {...triggerHandler()}
          trigger="Start 1"
        >
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>

        <Collapsible trigger="Start 2">
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
        <Collapsible trigger="Start 3">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

export default SidebarLeft;
