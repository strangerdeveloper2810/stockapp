import React from 'react';

const MarketOverview: React.FC = () => {
  const marketData = [
    { symbol: 'VCB', price: 140415, change: 2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: 2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: 2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: 2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: 2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: 2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: -2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: -2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: -2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: -2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: -2.9, volume: 140415 },
    { symbol: 'VCB', price: 140415, change: -2.9, volume: 140415 },
  ];

  return (
    <section className="flex overflow-hidden flex-col p-2 w-full bg-gray-900 rounded-md min-h-[600px]">
      <div className="flex gap-10 justify-between items-center w-full min-h-[28px]">
        <div className="flex self-stretch my-auto text-xs min-h-[26px]">
          <div className="flex gap-2.5 justify-center items-center px-2 h-full font-semibold border-b-2 border-solid border-b-emerald-100">
            <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Thị trường
            </div>
          </div>
          <div className="gap-2.5 self-stretch px-2 h-full text-gray-400">Top movers</div>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d531d829072c95020b40b6afb53c9e47d6d80551adeb8ce0b671c09396a637c?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt="Option 1"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ca32a5ae9f25437505f9a555dfb6bc123f3a36fad449e633325504cc90d702?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt="Option 2"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </div>
      <div className="flex overflow-hidden gap-1.5 items-start mt-3 w-full text-xs font-medium leading-relaxed">
        <button className="flex-1 shrink gap-1 self-stretch px-2 py-1 h-6 text-gray-400 rounded-lg bg-neutral-900 min-h-[24px]">
          Việt Nam
        </button>
        <button className="flex gap-1 justify-center items-center px-2 py-1 h-6 rounded-lg border border-emerald-100 border-solid bg-neutral-900 min-h-[24px]">
          <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
            Chỉ số thế giới
          </div>
        </button>
        <button className="flex-1 shrink gap-1 self-stretch px-2 py-1 h-6 text-gray-400 whitespace-nowrap rounded-lg bg-neutral-900 min-h-[24px]">
          Crypto
        </button>
        <button className="flex-1 shrink gap-1 self-stretch px-2 py-1 h-6 text-gray-400 rounded-lg bg-neutral-900 min-h-[24px]">
          Hàng hóa
        </button>
        <button className="flex-1 shrink gap-1 self-stretch px-2 py-1 h-6 text-gray-400 rounded-lg bg-neutral-900 min-h-[24px]">
          Tỷ giá
        </button>
      </div>
      <div className="flex gap-10 justify-between items-center py-1 pr-1 pl-2.5 mt-3 w-full rounded-md bg-neutral-900">
        <div className="flex gap-2 items-center self-stretch my-auto text-sm leading-none text-slate-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/135445815dc6b52ca18625a9b49abb9ce60edd65535e193eddf9e4dc176c4118?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt="Search icon"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <label htmlFor="marketSearch" className="sr-only">
            Tìm kiếm
          </label>
          <input
            type="text"
            id="marketSearch"
            placeholder="Tìm kiếm"
            className="self-stretch my-auto bg-transparent border-none outline-none"
          />
        </div>
        <button className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium text-gray-400 rounded bg-slate-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3745cd1ebeaf2197b78e5906666d1ccf11aba9802602ab55ef82f94f604c00?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt="Filter icon"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
          />
          <div className="self-stretch my-auto">Bộ lọc</div>
        </button>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 mt-3 w-full text-xs">
        <div className="flex gap-4 items-center w-full text-gray-400">
          <div className="flex gap-2 items-center self-stretch py-2 my-auto w-20">
            <div className="gap-2.5 self-stretch my-auto">Mã CK</div>
          </div>
          <div className="flex flex-1 shrink gap-2 items-center self-stretch py-2 my-auto whitespace-nowrap basis-0">
            <div className="gap-2.5 self-stretch my-auto">Giá</div>
          </div>
          <div className="flex flex-1 shrink gap-2 items-center self-stretch py-2 my-auto basis-0">
            <div className="gap-2.5 self-stretch my-auto">Thay đổi</div>
          </div>
          <div className="flex flex-1 shrink gap-2 items-center self-stretch py-2 my-auto basis-0">
            <div className="gap-2.5 self-stretch my-auto">KL GD</div>
          </div>
        </div>
        <div className="flex flex-col w-full font-medium text-white whitespace-nowrap">
          {marketData.map((item, index) => (
            <div key={index} className="flex gap-4 items-center w-full">
              <div className="flex gap-2 items-center self-stretch py-2.5 my-auto w-20">
                <div className="flex gap-1 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c425256ad44a7afbb7c2694f3e019f393a702a7b4a1053ea46f210c9d95be713?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                    alt={`${item.symbol} logo`}
                    className="object-contain shrink-0 self-stretch my-auto w-4 rounded-full aspect-square"
                  />
                  <div className="self-stretch my-auto">{item.symbol}</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ecb031b967288b1ed1e05840656d05430b0ca7fc939fa22601de7ef6685fa4?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                  alt="Favorite icon"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <div className="flex-1 shrink self-stretch py-2.5 my-auto">
                {item.price}
              </div>
              <div
                className={`flex flex-1 shrink items-center self-stretch py-2.5 my-auto font-semibold ${item.change > 0 ? 'text-green-500' : 'text-rose-600'} basis-0`}
              >
                <img
                  loading="lazy"
                  src={`http://b.io/ext_${item.change > 0 ? '25-' : '40-'}`}
                  alt={item.change > 0 ? 'Up arrow' : 'Down arrow'}
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
                <div className="self-stretch my-auto">{Math.abs(item.change)}%</div>
              </div>
              <div className="flex-1 shrink self-stretch py-2.5 my-auto">
                {item.volume}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
