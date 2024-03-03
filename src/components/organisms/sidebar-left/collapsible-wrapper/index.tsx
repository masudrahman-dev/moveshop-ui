import React, { ReactNode } from "react";
import Collapsible from "react-collapsible";

interface CollapsibleWrapperProps {
  collapsibleKey: string;
  isOpen: boolean;
  onStateChange: (collapsibleKey: string, isOpen: boolean) => void;
  children: ReactNode;
}
const CollapsibleWrapper: React.FC<CollapsibleWrapperProps> = ({
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
            <div className="border flex justify-between p-2 rounded-lg">
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

export default CollapsibleWrapper;
