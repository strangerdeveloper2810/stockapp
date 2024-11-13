import React from 'react';
import { TradingViewWidget } from './Children';
// import { Chart, OrderBook, TradeHistory, OrderForm } from './Children';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <section className="flex flex-col w-full">
      <TradingViewWidget />
    </section>
  );
};

export default Main;
