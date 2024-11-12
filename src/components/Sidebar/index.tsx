import React from 'react';
import MarketOverview from './MarketOverview';
import AssetSummary from './AssetSummary';

const Sidebar: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col min-w-[240px] w-[360px]">
      <MarketOverview />
      <AssetSummary />
    </div>
  );
};

export default Sidebar;
