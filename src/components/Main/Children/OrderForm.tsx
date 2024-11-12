import React from 'react';

const OrderForm: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 p-2 mt-1 w-full bg-gray-900 rounded max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex self-stretch my-auto text-xs min-h-[26px] min-w-[240px]">
          <div className="flex gap-2.5 justify-center items-center px-2 h-full font-semibold border-b-2 border-solid border-b-emerald-100">
            <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Sổ lệnh thường
            </div>
          </div>
          <div className="gap-2.5 self-stretch px-2 h-full text-gray-400">
            Sổ lệnh điều kiện
          </div>
          <div className="gap-2.5 self-stretch px-2 h-full text-gray-400">
            Danh mục sở hữu
          </div>
          <div className="gap-2.5 self-stretch px-2 h-full text-gray-400">
            Giao dịch bot
          </div>
        </div>
        <div className="flex gap-1 items-center self-stretch my-auto">
          <button aria-label="Refresh">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8edef92cd45b97458d8dd2401e248d8e475dc2a1057350573dcd18472f4483ec?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </button>
          <button aria-label="More options">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/374894cc171fd67ff99b067fbac319ece313d605d0c45beb4fef29a9782de6b9?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between mt-4 w-full max-md:max-w-full">
        <div className="flex items-center p-2 my-auto w-80 text-sm leading-none rounded-md border border-solid bg-gray-950 border-gray-950 min-w-[240px] text-slate-700">
          <div className="flex gap-2 items-center self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/554ef85c8102725a90158058d391b9b38603d8bbbff52a410c90fb6ab10afcf2?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.25]"
            />
            <div className="self-stretch my-auto">Mã CK</div>
          </div>
        </div>
        <div className="flex gap-4 h-full text-xs">
          <div className="flex gap-1 justify-center items-center px-3 py-1 h-full text-center text-white rounded bg-[linear-gradient(127deg,#060C29_28.26%,rgba(4,12,48,0.50_91.2%))] w-[108px]">
            <div className="self-stretch my-auto">Trạng thái</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eba65a1371dcb61b1d3961f069ec6f6b2966d8f140426b363f32f1e1e7c3ed3?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
            />
          </div>
          <div className="flex gap-3 items-center my-auto font-semibold whitespace-nowrap">
            <div className="flex gap-1 items-center self-stretch my-auto text-green-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a49033fc89575344ab41d925a46b563c9a2c8e50de8adf393565560d5f3e02b?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.33]"
              />
              <div className="self-stretch my-auto">Mua</div>
            </div>
            <div className="flex gap-1 items-center self-stretch my-auto text-rose-600">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f85d87b3fa2fba5677505dd67d1a504350f95b8523789d0d6414401191c3a33?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.33]"
              />
              <div className="self-stretch my-auto">Bán</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
