import React from 'react';

const Chart: React.FC = () => {
  return (
    <div className="flex flex-col self-start py-2 pl-1.5 bg-gray-900 rounded min-w-[240px] w-[940px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="flex self-stretch my-auto text-xs font-semibold min-h-[26px]">
          <span className="flex gap-2.5 justify-center items-center px-2 h-full border-b-2 border-solid border-b-emerald-100">
            <span className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Biểu đồ
            </span>
          </span>
        </h2>
        <div className="flex gap-4 items-center self-stretch my-auto">
          <button aria-label="Chart option 1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f8044eccf1607a6e8c9d47da052bfbe01cd53bcd9973924d294744e7089a61f?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square min-h-[16px]"
            />
          </button>
          <button aria-label="Chart option 2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8edef92cd45b97458d8dd2401e248d8e475dc2a1057350573dcd18472f4483ec?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </button>
          <button aria-label="Chart option 3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/374894cc171fd67ff99b067fbac319ece313d605d0c45beb4fef29a9782de6b9?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-2 items-start mt-2 w-full max-md:max-w-full">
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>PE</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>PB</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>EPS</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>EY</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>ROE</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>ROA</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>VOL</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>MA</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>EMA</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>MACD</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>RSI</span>
        </button>
        <button className="flex gap-1 items-center w-14 text-xs text-gray-400">
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <span>BOLL</span>
        </button>
      </div>
      <div className="relative flex-col pr-16 mt-2 max-w-full min-h-[436px] w-[924px] max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3abb8645-037b-47a7-804d-4749f58501c5?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
          alt="Chart"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative flex flex-col w-full min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap flex-1 gap-10 justify-between pl-16 size-full max-md:pl-5 max-md:max-w-full">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="flex min-h-[436px] max-md:hidden" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-7 items-center p-1 mt-2 w-full bg-[linear-gradient(127deg,#060C29_28.26%,rgba(4,12,48,0.50_91.2%))] max-md:max-w-full">
        <div className="self-stretch my-auto text-xs font-semibold leading-relaxed bg-clip-text bg-[linear-gradient(136deg,#E9E8FF_0%,#B7B1FF_148.54%)]">
          TIN TỨC
        </div>
        <div className="flex flex-wrap gap-5 items-center self-stretch my-auto text-xs text-gray-400 min-w-[240px] max-md:max-w-full">
          <div className="gap-1 self-stretch my-auto leading-loose">
            Sẽ tổ chức lễ chuyển giao 2 ngân hàng 0 đồng
          </div>
          <div className="gap-1 self-stretch my-auto leading-loose min-w-[240px]">
            Công ty chứng khoán đầu tiên công bố BCTC quý 3/2024
          </div>
          <div className="gap-1 self-stretch my-auto leading-loose">
            Gía thép thế giới thay đổi ......
          </div>
          <div className="gap-1 self-stretch my-auto text-xs">
            Gía thép thế giới thay đổi ......
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
