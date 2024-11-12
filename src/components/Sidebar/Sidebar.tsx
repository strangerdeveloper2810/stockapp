import React from 'react';
import Image from 'next/image';
import { stock, overview, trade, news, category } from '@/assets/icons';
import { map, get } from 'lodash';

const sidebarItems = [
  {
    icon: stock,
    label: 'Cổ phiếu',
  },
  {
    icon: overview,
    label: 'Tổng quan',
  },
  {
    icon: trade,
    label: 'Đặt lệnh',
  },
  {
    icon: news,
    label: 'Tin tức',
  },
  {
    icon: category,
    label: 'Danh mục',
  },
];

const renderSidebarItems = () =>
  map(sidebarItems, (item) => (
    <div key={get(item, 'label', '')} className="flex flex-col items-center mt-6">
      <Image
        src={get(item, 'icon', '')}
        alt={get(item, 'label', '')}
        className="object-contain w-6 aspect-square"
      />
      <div className="mt-1">{get(item, 'label', '')}</div>
    </div>
  ));

const Sidebar: React.FC = () => {
  return (
    <nav
      aria-label="Sidebar navigation"
      className="flex flex-col gap-6 justify-center items-center px-1.5 py-5 text-xs text-gray-400 bg-gray-900 rounded w-[54px] max-md:hidden"
    >
      <div className="flex flex-col flex-1 items-center max-md:hidden">
        <div className="flex flex-col items-center">{renderSidebarItems()}</div>
      </div>
    </nav>
  );
};

export default Sidebar;
