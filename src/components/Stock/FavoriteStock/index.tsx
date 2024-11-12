import React from 'react';

const favoriteStocks = [
  { symbol: 'VCB', price: 91.4, change: -0.11, isUp: false },
  { symbol: 'VCB', price: 91.4, change: 0.11, isUp: true },
  { symbol: 'VCB', price: 91.4, change: 0.11, isUp: true },
  { symbol: 'VCB', price: 91.4, change: -0.11, isUp: false },
  { symbol: 'VCB', price: 91.4, change: -0.11, isUp: false },
  { symbol: 'VCB', price: 91.4, change: -0.11, isUp: false },
  { symbol: 'VCB', price: 91.4, change: -0.11, isUp: false },
];

const FavoriteStocks: React.FC = () => {
  return (
    <nav className="flex justify-between px-5 py-0 mt-1 w-full bg-gray-900 rounded max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-8 items-center py-1 basis-0 min-w-[240px] size-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-xs font-semibold text-gray-400">
          Mục yêu thích
        </h2>
        <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px] max-md:max-w-full">
          {favoriteStocks.map((stock, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-2 items-center self-stretch my-auto">
                <div className="flex gap-1 items-center self-stretch my-auto">
                  <div className="self-stretch my-auto text-xs font-medium text-white">
                    {stock.symbol}
                  </div>
                  <div
                    className={`flex gap-0.5 items-center self-stretch my-auto text-xs leading-relaxed ${stock.isUp ? 'text-green-500' : 'text-rose-600'}`}
                  >
                    <div className="gap-1 self-stretch my-auto font-semibold">
                      {stock.price}
                    </div>
                    <div className="flex justify-center items-center self-stretch my-auto font-medium rounded">
                      <img
                        loading="lazy"
                        src={
                          stock.isUp
                            ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/214d831723a59da4960a08dc8de30a1c03784aefd169c92869b874ca990a4dcc?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61'
                            : 'https://cdn.builder.io/api/v1/image/assets/TEMP/edc08692662d4538000235788468f3e105414a145eab3450e3a37d1daced943b?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61'
                        }
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                      />
                      <div>{stock.change}%</div>
                    </div>
                  </div>
                </div>
              </div>
              {index < favoriteStocks.length - 1 && (
                <div className="shrink-0 self-stretch my-auto w-0 h-3 border border-solid bg-slate-800 border-slate-800"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FavoriteStocks;
