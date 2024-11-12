import React from 'react';
import {
  Header,
  StockInfo,
  FavoriteStocks,
  Main,
  Sidebar,
  NavigationSidebar,
} from '@/components';

interface IHomeLayoutProps {
  children: React.ReactNode;
}
const HomeLayout: React.FC<IHomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-1 px-1 py-0 bg-gray-950">
      <Header />
      <StockInfo />
      <FavoriteStocks />
      <main className="flex flex-wrap flex-1 gap-1 pb-2 mt-1 h-full max-md:max-w-full">
        <Main>{children}</Main>
        <Sidebar />
        <NavigationSidebar />
      </main>
    </div>
  );
};

export default HomeLayout;
