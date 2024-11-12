import React from 'react';
import OverviewChart from './OverviewChart';
import OrderForm from './OrderForm';
import OrderBook from './OrderBook';
import TradeHistory from './TradeHistory';

interface IMainProps {
  children: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[1662px] max-md:max-w-full">
      <div className="flex flex-wrap flex-1 gap-1 size-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-1 gap-1 size-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              {children}
              {/* <OrderForm /> */}
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              {/* <OrderBook /> */}
              {/* <TradeHistory /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
