import React from 'react';
const SearchBar: React.FC = () => {
  return (
    <div className="flex z-0 gap-10 items-center self-stretch py-1 py-1.5 pr-1 pl-2.5 my-auto w-80 text-xs rounded-md border border-solid bg-gray-950 border-gray-950 min-h-[32px] min-w-[240px] text-slate-700">
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
        className="bg-transparent border-none outline-none w-full"
        aria-label="Tìm kiếm"
      />
    </div>
  );
};

export default SearchBar;
