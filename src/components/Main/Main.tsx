import React from 'react';
import { Chart, OrderBook, TradeHistory, OrderForm } from './Children';
interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = () => {
  return (
    <section className="flex flex-col min-w-[240px] w-[1662px] max-md:max-w-full">
      <div className="flex flex-wrap flex-1 gap-1 size-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-1 gap-1 size-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              {/* <Chart /> */}
              {/* <OrderBook /> */}
              {/* <TradeHistory /> */}
            </div>
          </div>
        </div>
        {/* <OrderForm /> */}
      </div>
    </section>
  );
};

export default Main;
