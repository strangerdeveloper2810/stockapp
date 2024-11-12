import React from 'react';

const StockInfo: React.FC = () => {
  return (
    <section className="flex flex-col gap-1 px-5 py-0 mt-1 w-full bg-gray-900 rounded max-md:max-w-full">
      <div className="flex gap-8 items-center py-1 w-full max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto text-lg font-semibold leading-loose text-white whitespace-nowrap">
          <div className="flex gap-2 items-center self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7db5668b2241a9be5e2e0daeec0e2dce783b26d35eaebf0e04ef1f8442f80b7b?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt="VNIDEX logo"
              className="object-contain shrink-0 self-stretch my-auto w-6 rounded-full aspect-square"
            />
            <div className="flex gap-1 items-center self-stretch my-auto">
              <h1 className="self-stretch my-auto">VNIDEX</h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b5233d1a997b9f3f4a20842c0d68ccc3b405cca49a2eb7877071ffc5032e50?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/660da077415927dd0d87e2995b21caac3a3beacdd2b418c4675f0202973557ba?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[1516px] max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
            <div className="flex flex-col justify-center items-end self-stretch my-auto text-rose-600 whitespace-nowrap">
              <div className="gap-1 self-stretch text-sm font-semibold leading-none">
                91.4
              </div>
              <div className="flex gap-px justify-center items-center text-xs font-medium rounded">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/35785d913f0b0f18a75d32da92f1a2a183eebb99da22a35f754ab2870c090fa5?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]"
                />
                <div>-0.11%</div>
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[35px]">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá sàn
              </div>
              <div className="text-sm font-semibold leading-none text-cyan-400">
                85.10
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[70px]">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá tham chiếu
              </div>
              <div className="text-sm font-semibold leading-none text-yellow-400">
                91.50
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[38px]">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá trần
              </div>
              <div className="text-sm font-semibold leading-none text-fuchsia-400">
                97.90
              </div>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 h-8 border border-solid bg-slate-800 border-slate-800"></div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[57px]">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Giá trị khớp
              </div>
              <div className="flex items-center w-full">
                <div className="self-stretch my-auto text-sm font-semibold leading-none text-white">
                  85.340
                </div>
                <div className="self-stretch my-auto text-xs font-medium leading-relaxed text-gray-400">
                  tỷ
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[75px]">
              <div className="text-xs font-medium leading-relaxed text-gray-400">
                Khối lượng khớp
              </div>
              <div className="text-sm font-semibold leading-none text-white">970.90</div>
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto w-[60px]">
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

export default StockInfo;
