import React from 'react';
const OverviewChart: React.FC = () => {
  return (
    <section className="flex flex-col self-start py-2 pl-1.5 bg-gray-900 rounded min-w-[240px] w-[940px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex self-stretch my-auto text-xs font-semibold min-h-[26px]">
          <div className="flex gap-2.5 justify-center items-center px-2 h-full border-b-2 border-solid border-b-emerald-100">
            <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Biểu đồ
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center self-stretch my-auto">
          <div className="flex gap-1 items-center self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f8044eccf1607a6e8c9d47da052bfbe01cd53bcd9973924d294744e7089a61f?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt="Chart option 1"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square min-h-[16px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8edef92cd45b97458d8dd2401e248d8e475dc2a1057350573dcd18472f4483ec?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt="Chart option 2"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/374894cc171fd67ff99b067fbac319ece313d605d0c45beb4fef29a9782de6b9?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
              alt="Chart option 3"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center mt-2 w-full text-xs font-medium leading-relaxed text-gray-400 whitespace-nowrap max-md:max-w-full">
        {['1m', '3m', '5m', '15m', '30m'].map((time, index) => (
          <button key={index} className="self-stretch my-auto">
            {time}
          </button>
        ))}
        <div className="shrink-0 self-stretch my-auto w-0 h-3 border border-solid bg-slate-800 border-slate-800"></div>
        <button className="self-stretch my-auto w-4 h-4 text-center text-black rounded bg-[linear-gradient(136deg,#E9E8FF_0%,#B7B1FF_148.54%)] min-h-[16px]">
          1h
        </button>
        <button className="self-stretch my-auto">2h</button>
        <div className="shrink-0 self-stretch my-auto w-0 h-3 border border-solid bg-slate-800 border-slate-800"></div>
        {['1d', '1W', '1M'].map((time, index) => (
          <button key={index} className="self-stretch my-auto">
            {time}
          </button>
        ))}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fbb815b339ff20782b88d499ee7898479c09e6b88d655bfaa848a4f2d686c18?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
          alt="Chart option"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="shrink-0 self-stretch my-auto w-0 h-5 bg-gray-400 border border-gray-400 border-solid"></div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/98438ddb5e964be59f7e6eb5d90e7c9d71a5a0f895472f3c67dbe3da2fb5715a?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
          alt="Chart option"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
      <div className="flex flex-wrap gap-2 items-center mt-2 w-full text-xs font-semibold leading-relaxed whitespace-nowrap max-md:max-w-full">
        <div className="self-stretch my-auto text-sm leading-none text-white">VCB</div>
        <div className="flex items-center self-stretch my-auto">
          <div className="self-stretch my-auto text-white">O</div>
          <div className="self-stretch my-auto text-green-500">7.9%/948.97</div>
        </div>
        <div className="flex items-center self-stretch my-auto">
          <div className="self-stretch my-auto text-white">H</div>
          <div className="self-stretch my-auto text-green-500">7.9%/948.97</div>
        </div>
        <div className="flex items-center self-stretch my-auto">
          <div className="self-stretch my-auto text-white">L</div>
          <div className="self-stretch my-auto text-green-500">7.9%/948.97</div>
        </div>
        <div className="flex items-center self-stretch my-auto">
          <div className="self-stretch my-auto text-white">C</div>
          <div className="self-stretch my-auto text-green-500">7.9%/948.97</div>
        </div>
        <div className="self-stretch my-auto text-green-500">+521.82(+0.67)</div>
      </div>
      <div className="flex relative flex-col pr-16 mt-2 max-w-full min-h-[436px] w-[924px] max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/634d509f-4c61-4fbd-950a-01fffb25e798?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
          alt="Chart"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap flex-1 gap-10 justify-between pl-16 size-full max-md:pl-5 max-md:max-w-full">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="flex min-h-[436px] max-md:hidden" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-2 items-start mt-2 w-full max-md:max-w-full">
        {[
          'PE',
          'PB',
          'EPS',
          'EY',
          'ROE',
          'ROA',
          'VOL',
          'MA',
          'EMA',
          'MACD',
          'RSI',
          'BOLL',
        ].map((option, index) => (
          <div key={index} className="flex gap-1 items-center w-14">
            <div className="flex gap-1.5 justify-center items-center self-stretch my-auto w-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/714df9ef84869ca7aecef56190f8b395a05c5a3340e1395b33a6262e1b4644c7?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-square"
              />
            </div>
            <div className="self-stretch my-auto text-xs text-gray-400">{option}</div>
          </div>
        ))}
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
    </section>
  );
};

export default OverviewChart;
