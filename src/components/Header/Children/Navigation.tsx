import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    'Thị trường',
    'Giao dịch',
    'Bảng giá',
    'Xây dựng',
    'Học viện',
    'Thêm',
  ];

  return (
    <nav className="flex z-0 flex-wrap items-center self-stretch my-auto text-xs font-semibold text-white min-w-[240px] max-md:max-w-full">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="gap-0.5 self-stretch px-4 my-auto min-h-[44px] flex items-center"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
