import React, { useState } from "react";

const CheckboxExample = () => {
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
    option1: false,
    option2: false,
    option3: true,
  });

  const handleCheckboxChange = (key: string) => {
    setCheckboxes({
      ...checkboxes,
      [key]: !checkboxes[key],
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxes.option1}
          onChange={() => handleCheckboxChange("option1")}
        />
        Option 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkboxes.option2}
          onChange={() => handleCheckboxChange("option2")}
        />
        Option 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkboxes.option3}
          onChange={() => handleCheckboxChange("option3")}
        />
        Option 3
      </label>
    </div>
  );
};

export default CheckboxExample;
