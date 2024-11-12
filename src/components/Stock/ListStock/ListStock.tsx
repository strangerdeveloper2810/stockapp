import React from 'react';
import Image from 'next/image';
import { arrowDownPercent } from '@/assets/icons';
import StockItem from './StockItem';

const ListStock: React.FC = () => {
  return (
    <section className="flex flex-col gap-1 px-5 py-0 mt-1 w-full bg-gray-900 rounded max-md:max-w-full">
      <div className="flex gap-8 items-center py-1 w-full max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto text-lg font-semibold leading-loose text-white whitespace-nowrap">
          <StockItem />
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full whitespace-nowrap">
            <div className="flex flex-col justify-center items-end self-stretch my-auto text-rose-600 whitespace-nowrap">
              <div className="gap-1 self-stretch text-sm font-semibold leading-none">
                91.4
              </div>
              <div className="flex gap-px justify-center items-center text-xs font-medium rounded">
                <Image
                  src={arrowDownPercent}
                  alt="arrowDownPercent"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]"
                />
                <div className="self-stretch my-auto"> -0.11%</div>
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[35px] whitespace-nowrap">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá sàn
              </div>
              <div className="text-sm font-semibold leading-none text-cyan-400">
                85.10
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[70px] whitespace-nowrap">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá tham chiếu
              </div>
              <div className="text-sm font-semibold leading-none text-yellow-400">
                91.50
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[38px] whitespace-nowrap">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá trần
              </div>
              <div className="text-sm font-semibold leading-none text-fuchsia-400">
                97.90
              </div>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 h-8 border border-solid bg-slate-800 border-slate-800" />
            <div className="flex flex-col justify-center self-stretch my-auto w-[57px] whitespace-nowrap">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá trị khớp
              </div>
              <div className="flex items-center w-full">
                <div className="self-stretch my-auto text-sm font-semibold leading-none text-white">
                  85.340
                </div>
                <div className="self-stretch ml-1 text-xs font-medium leading-relaxed text-gray-400">
                  tỷ
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[75px] whitespace-nowrap">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Khối lượng khớp
              </div>
              <div className="text-sm font-semibold leading-none text-white">970.90</div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[60px] whitespace-nowrap">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                NN mua ròng
              </div>
              <div className="text-sm font-semibold leading-none text-green-500">
                497.90
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListStock;
