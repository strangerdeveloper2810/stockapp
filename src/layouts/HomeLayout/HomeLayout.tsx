import React from 'react';
import { Header, ListStock, FavoriteStock, Sidebar, Main } from '@/components';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<IHomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ListStock />
      <FavoriteStock />
      <div className="flex flex-1 h-full">
        <div className="flex-1">
          <Main>{children}</Main>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default HomeLayout;
