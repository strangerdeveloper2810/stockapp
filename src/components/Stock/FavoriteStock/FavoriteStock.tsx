import React from 'react';
import Image from 'next/image';
import { arrowDownPercent, arrowUpPercent } from '@/assets/icons';
import { map, get } from 'lodash';
const favorites = [
  { symbol: 'VCB', price: 91.4, change: -0.11, isDown: true },
  { symbol: 'VCB', price: 91.4, change: 0.11, isDown: false },
  { symbol: 'VCB', price: 91.4, change: 0.11, isDown: false },
  { symbol: 'VCB', price: 91.4, change: -0.11, isDown: true },
  { symbol: 'VCB', price: 91.4, change: -0.11, isDown: true },
  { symbol: 'VCB', price: 91.4, change: -0.11, isDown: true },
  { symbol: 'VCB', price: 91.4, change: -0.11, isDown: true },
  { symbol: 'VCB', price: 91.4, change: -0.11, isDown: true },
];

const renderFavoriteStockItem = () =>
  map(favorites, (item) => (
    <React.Fragment key={`${get(item, 'symbol', '')}-${get(item, 'change', 0)}`}>
      <div className="flex gap-2 items-center self-stretch my-auto">
        <div className="self-stretch my-auto text-xs font-medium text-white">
          {get(item, 'symbol', '')}
        </div>
        <div
          className={`flex gap-0.5 items-center self-stretch my-auto text-xs leading-relaxed ${get(item, 'isDown') ? 'text-rose-600' : 'text-green-500'}`}
        >
          <div
            className={`flex gap-0.5 items-center self-stretch my-auto text-xs leading-relaxed ${get(item, 'isDown') ? 'text-rose-600' : 'text-green-500'}`}
          >
            <div className="gap-1 self-stretch my-auto font-semibold">
              {get(item, 'price')}
            </div>
            <div className="flex justify-center items-center self-stretch my-auto font-medium rounded">
              <Image
                src={get(item, 'isDown') ? arrowDownPercent : arrowUpPercent}
                alt="arrowDownPercent"
                className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
              />
              <div className="self-stretch my-auto">{item.change}%</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ));

const FavoriteStock: React.FC = () => {
  return (
    <nav className="flex justify-between px-5 py-0 mt-1 w-full bg-gray-900 rounded max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-8 items-center py-1 basis-0 min-w-[240px] size-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-xs font-semibold text-gray-400">
          Mục yêu thích
        </h2>
        <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px] max-md:max-w-full">
          {renderFavoriteStockItem()}
        </div>
      </div>
    </nav>
  );
};

export default FavoriteStock;
