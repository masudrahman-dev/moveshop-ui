import React, { useState } from 'react';

const TabsExample = () => {
  const [activeTab, setActiveTab] = useState<{ [key: string]: boolean; }>({
    tab1: true,
    tab2: false,
    tab3: false,
  });

  const switchTab = (key: string) => {
    setActiveTab({
      ...Object.fromEntries(Object.entries(activeTab).map(([k]) => [k, false])),
      [key]: true,
    });
  };

  return (
    <div>
      <button onClick={() => switchTab('tab1')} className={activeTab.tab1 ? 'active' : ''}>
        Tab 1
      </button>
      <button onClick={() => switchTab('tab2')} className={activeTab.tab2 ? 'active' : ''}>
        Tab 2
      </button>
      <button onClick={() => switchTab('tab3')} className={activeTab.tab3 ? 'active' : ''}>
        Tab 3
      </button>
    </div>
  );
};

export default TabsExample;
