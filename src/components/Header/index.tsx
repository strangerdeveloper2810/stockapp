import React from 'react';
const Header: React.FC = () => {
  return (
    <header className="flex relative justify-between items-center px-5 py-3 w-full bg-gray-900 rounded min-h-[68px] max-md:max-w-full">
      <div className="flex overflow-hidden z-0 gap-2 items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f6b3eb6172d9029356dd8bed475c649be971cf3cf160bb588182b4ca5fce4ae?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
          alt="Company logo"
          className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35c047f9af999922c04b7e6eb3dd5bf02821b48253e5700bc668418e61df145?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
          alt="Company name"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.61] w-[94px]"
        />
      </div>
      <nav className="flex z-0 flex-wrap items-center self-stretch my-auto text-xs font-semibold text-white min-w-[240px] max-md:max-w-full">
        <a href="#market" className="gap-0.5 self-stretch px-4 my-auto min-h-[44px]">
          Thị trường
        </a>
        <a href="#trading" className="gap-0.5 self-stretch px-4 my-auto min-h-[44px]">
          Giao dịch
        </a>
        <a href="#price-board" className="gap-0.5 self-stretch px-4 my-auto min-h-[44px]">
          Bảng giá
        </a>
        <a href="#build" className="gap-0.5 self-stretch px-4 my-auto min-h-[44px]">
          Xây dựng
        </a>
        <a href="#academy" className="gap-0.5 self-stretch px-4 my-auto min-h-[44px]">
          Học viện
        </a>
        <a
          href="#more"
          className="gap-0.5 self-stretch px-4 my-auto whitespace-nowrap min-h-[44px]"
        >
          Thêm
        </a>
      </nav>
      <form className="flex z-0 gap-10 items-center self-stretch py-1 py-1.5 pr-1 pl-2.5 my-auto w-80 text-xs rounded-md border border-solid bg-gray-950 border-gray-950 min-h-[32px] min-w-[240px] text-slate-700">
        <label
          htmlFor="search-input"
          className="flex gap-2 items-center self-stretch my-auto"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d261fbc170f70a8039cadae3c547f8dce7304a8893a08b0d5e5e52d397ac22ca?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span className="sr-only">Tìm kiếm</span>
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Tìm kiếm"
          className="bg-transparent border-none outline-none flex-grow"
        />
      </form>
      <div className="flex z-0 gap-10 items-center self-stretch my-auto min-w-[240px]">
        <div className="flex items-center self-stretch my-auto text-xs font-semibold">
          <button className="self-stretch px-4 py-2 my-auto text-white rounded-lg min-h-[32px] shadow-[2px_2px_4px_rgba(130,151,177,0.1)]">
            Đăng nhập
          </button>
          <button className="self-stretch px-4 py-2 my-auto text-black rounded-lg border border-orange-300 border-solid shadow-lg bg-slate-200 min-h-[32px]">
            Đăng ký
          </button>
        </div>
        <div className="flex gap-3 items-center self-stretch my-auto">
          <button
            aria-label="Notification"
            className="flex flex-col items-center self-stretch my-auto w-6"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4941ba7709a711102f020b23fb14c735140883d1eed112ac320006a025d223?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain w-6 aspect-square"
            />
          </button>
          <button
            aria-label="Settings"
            className="flex items-center self-stretch my-auto"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a5d834209a09c4a74060fcbc6c34c97baa9b9b9f3f24b61101dc7fd30ca673?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
          <button
            aria-label="Messages"
            className="flex items-center self-stretch my-auto"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb3c523e087750a5ee7800d53b4936a21e4339066da7bddd465138245fe2d59e?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
          <button
            aria-label="User profile"
            className="flex items-center self-stretch my-auto"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11173c5c92f2695fcb5bd301c93d83539724d62662cc5e343ff4e3c1a67f6c97?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 rounded-md aspect-square"
            />
          </button>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/afc86a531717770dcb6738ed56901fe0b821166935bc19c7a2bc89fb09549175?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
        alt=""
        className="object-contain absolute bottom-0 left-2/4 z-0 shrink-0 self-start w-6 h-6 -translate-x-2/4 aspect-square translate-y-[0%]"
      />
    </header>
  );
};

export default Header;
