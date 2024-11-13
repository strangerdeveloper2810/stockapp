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
    <div key={get(item, 'label', '')} className="flex flex-col items-center mt-4">
      <Image
        src={get(item, 'icon', '')}
        alt={get(item, 'label', '')}
        className="object-contain w-6 aspect-square"
      />
      <div className="mt-1 text-gray-300 whitespace-nowrap">{get(item, 'label', '')}</div>
    </div>
  ));

const Sidebar: React.FC = () => {
  return (
    <nav
      aria-label="Sidebar navigation"
      className="flex flex-col items-center mt-2 px-2 py-5 text-xs text-gray-400 bg-gray-900 w-[64px] min-h-screen"
    >
      {renderSidebarItems()}
    </nav>
  );
};

export default Sidebar;
