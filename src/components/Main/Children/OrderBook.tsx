import React from 'react';

const OrderBook: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 p-2 w-full bg-gray-900 rounded">
      <div className="flex gap-10 justify-between items-center w-full">
        <h2 className="flex self-stretch my-auto text-xs font-semibold min-h-[26px]">
          <span className="flex gap-2.5 justify-center items-center px-2 h-full border-b-2 border-solid border-b-emerald-100">
            <span className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Sổ lệnh
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
      <div className="flex flex-col mt-3 w-full text-xs font-semibold leading-relaxed">
        <div className="flex overflow-hidden flex-col flex-1 w-full">
          <div className="flex gap-1 items-start w-full text-gray-400">
            <div className="flex-1 shrink basis-0">Giá</div>
            <div className="flex-1 shrink basis-0">Tăng / Giảm</div>
            <div className="flex-1 shrink basis-0">Khối lượng</div>
          </div>
          <div className="flex flex-col mt-3 w-full text-green-500 whitespace-nowrap">
            <div className="flex flex-col w-full text-rose-600">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex relative w-full min-h-[20px]">
                  <div className="flex absolute right-0 bottom-0 z-0 shrink-0 self-start h-5 rounded-sm bg-pink-950 min-w-[240px] w-[342px]" />
                  <div className="z-0 flex-1 shrink my-auto basis-4">91,4</div>
                  <div className="flex z-0 flex-1 shrink items-center py-2.5 h-full basis-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c764e3c224fbf6ca4bffbc05b574434a4d7cd71ae15194f8d8c2489976d053a2?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                    />
                    <div className="self-stretch my-auto">2.9%</div>
                  </div>
                  <div className="flex-1 shrink gap-2.5 self-stretch px-2 h-full text-white rounded-sm">
                    10,600
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center items-center self-center mt-3 text-sm leading-none">
              <div className="self-stretch my-auto">90,3</div>
              <div className="flex items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5706b2a7ea3a4e372312015194b65bd87157647a0543c8763ef93788921424cf?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
                <div className="self-stretch my-auto">2.9%</div>
              </div>
            </div>
            <div className="flex flex-col mt-3 w-full">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex relative w-full min-h-[20px]">
                  <div className="flex absolute right-0 bottom-0 z-0 shrink-0 self-start h-5 rounded-sm bg-neutral-800 min-w-[240px] w-[342px]" />
                  <div className="z-0 flex-1 shrink my-auto basis-4">91,4</div>
                  <div className="flex z-0 flex-1 shrink items-center py-2.5 h-full basis-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef6dca36f65986d4b3c5365558fdddf952a323e479cf72269d7a1d08fbfc9cb?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                    />
                    <div className="self-stretch my-auto">2.9%</div>
                  </div>
                  <div className="flex-1 shrink gap-2.5 self-stretch px-2 h-full text-white rounded-sm">
                    10,600
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start mt-4 w-full whitespace-nowrap">
          <div className="flex flex-1 shrink gap-2 items-center text-green-500 rounded basis-0 bg-neutral-800">
            <div className="self-stretch p-1 my-auto w-5 rounded border border-green-500 border-solid">
              M
            </div>
            <div className="flex-1 shrink self-stretch my-auto basis-0">90,300</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb557518acc295e3fdad1bf83b24961c604ff1758d58a0a24985616c74a5fca7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto h-6 aspect-[0.29] fill-gray-900 w-[7px]"
            />
          </div>
          <div className="flex flex-1 shrink gap-2 items-center text-rose-600 rounded basis-0 bg-pink-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47548391dde89d9d97237719b4a895c3d87288309a15a605e3cbd26e69f16ace?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-2 h-6 aspect-[0.33] fill-gray-900"
            />
            <div className="flex-1 shrink self-stretch my-auto basis-0">90,300</div>
            <div className="self-stretch p-1 my-auto w-5 rounded border border-rose-600 border-solid">
              B
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
