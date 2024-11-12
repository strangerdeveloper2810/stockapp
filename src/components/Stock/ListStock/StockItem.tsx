'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Star, arrowDown } from '@/assets/icons';
import { map, get } from 'lodash';
import data from '@/data/data.json';
import { Stock } from '@/types';
import { initialValuesStock } from '@/constants';

const StockItem: React.FC = () => {
  const [stocks, setStock] = useState<Stock>(initialValuesStock);

  // Memoize renderListStock to prevent re-rendering on each component update
  const renderListStock = useMemo(
    () =>
      map(data, (item) => (
        <div className="p-3" key={get(item, 'symbol', '')}>
          <Link
            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
            href="#"
            onClick={() => setStock(item)}
          >
            <p className="font-semibold text-white">{get(item, 'symbol', '')}</p>
            <p className="text-white/50">{get(item, 'description', '')}</p>
          </Link>
        </div>
      )),
    [data], // renderListStock sẽ chỉ re-render khi `data` thay đổi
  );

  return (
    <div className="flex gap-2 items-center self-stretch my-auto">
      <Popover>
        <PopoverButton className="flex items-center gap-2 text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <div className="flex items-center gap-1">
            {get(stocks, 'symbol', '')}
            <Image
              src={arrowDown}
              alt="arrowDown"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </PopoverButton>

        {/* Lazy load Popover content */}
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          {renderListStock}
        </PopoverPanel>
      </Popover>
      <Image
        src={Star}
        alt="start-icon"
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
    </div>
  );
};

export default StockItem;
