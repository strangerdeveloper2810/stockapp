import React from 'react';

const NavigationSidebar: React.FC = () => {
  const navItems = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0856070bcff053d3deb2068080accaa0ffbe4f420e93048a876303f5b727713?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61',
      label: 'Cổ phiếu',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a9407cf7becf8173fe1c56f6d52c18e8170a77d1c3bf5175ba4d8275ad90df2?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61',
      label: 'Tổng quan',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a4c451189fbe54a1ddb9220feef16f56a822c22f3be0f627850d5ce76a6a89a4?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61',
      label: 'Đặt lệnh',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4fa922131eae1ffdecb3f04bf62d447a7fb0ef810d52d5de925fd822552fbbda?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61',
      label: 'Tin tức',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b0a43807655e618b73109857ae7f2de08247ede3c9dbf4374feadd2a894c0534?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61',
      label: 'Danh mục',
    },
  ];

  return (
    <nav className="flex flex-col gap-6 justify-center items-center px-1.5 py-5 text-xs text-gray-400 bg-gray-900 rounded w-[54px] max-md:hidden">
      <div className="flex flex-col flex-1 items-center max-md:hidden">
        <div className="flex flex-col items-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${index !== 0 ? 'mt-6' : ''} w-6`}
            >
              <img
                loading="lazy"
                src={item.icon}
                alt={item.label}
                className="object-contain w-full aspect-square"
              />
              <div className="mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationSidebar;
