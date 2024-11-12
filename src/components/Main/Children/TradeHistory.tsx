import React from 'react';

const TradeHistory: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col p-2 mt-1 w-full bg-gray-900 rounded min-h-[280px]">
      <div className="flex gap-10 justify-between items-center w-full">
        <h2 className="flex self-stretch my-auto text-xs font-semibold min-h-[26px]">
          <span className="flex gap-2.5 justify-center items-center px-2 h-full border-b-2 border-solid border-b-emerald-100">
            <span className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Lịch sử giao dịch
            </span>
          </span>
        </h2>
        <div className="flex gap-1 items-center self-stretch my-auto">
          <button aria-label="Refresh">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80b814e37ea8569ed004b2517f85574984f34e875fc5c605f60088af5c06c1a8?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </button>
          <button aria-label="More options">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c32c4ecd72cc58ced9929f92a82beb573b22b50357de41a94dcdbf9f1167eb1?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 mt-3 w-full text-xs font-semibold leading-relaxed">
        <div className="flex gap-1 items-start w-full text-gray-400">
          <div className="flex-1 shrink basis-0">Giá</div>
          <div className="flex flex-1 shrink gap-1 items-center basis-0">
            <div className="self-stretch my-auto">Khối lượng</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4498ddaffc9ea5803c52ea89f0c3c18e2e75479a620ee7078300eed8341d720?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
          </div>
          <div className="flex-1 shrink text-center basis-0">Lệnh</div>
          <div className="w-16 text-right">Thời gian</div>
        </div>
        <div className="flex overflow-hidden flex-col flex-1 mt-3 w-full text-green-500 whitespace-nowrap">
          <div className="flex flex-col w-full">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="flex gap-1 items-center mt-2 w-full">
                <div
                  className={`flex-1 shrink self-stretch my-auto basis-0 ${index % 2 === 0 ? 'text-green-500' : 'text-rose-600'}`}
                >
                  90,3
                </div>
                <div className="flex-1 shrink self-stretch my-auto text-white basis-0">
                  10,600
                </div>
                <div
                  className={`flex-1 shrink gap-2.5 self-stretch my-auto text-center rounded-sm ${index % 2 === 0 ? 'text-green-500' : 'text-rose-600'}`}
                >
                  {index % 2 === 0 ? 'Mua' : 'Bán'}
                </div>
                <div className="flex-1 shrink gap-2.5 self-stretch my-auto w-16 text-right text-white rounded-sm">
                  13:17:30
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
