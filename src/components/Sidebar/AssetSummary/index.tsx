import React from 'react';
const AssetSummary: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col p-2 mt-1 w-full bg-gray-900 rounded">
      <div className="flex gap-10 justify-between items-center w-full h-6">
        <div className="flex self-stretch my-auto text-xs min-h-[26px]">
          <div className="flex gap-2.5 justify-center items-center px-1 py-0 h-full font-semibold border-b-2 border-solid border-b-emerald-100">
            <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(135deg,#CFF8EA_0%,#67E1C0_100%)]">
              Tài sản
            </div>
          </div>
          <div className="gap-2.5 self-stretch px-1 h-full text-gray-400">Cổ phiếu</div>
          <div className="gap-2.5 self-stretch px-1 h-full text-gray-400">Phái sinh</div>
        </div>
        <div className="flex gap-1 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8edef92cd45b97458d8dd2401e248d8e475dc2a1057350573dcd18472f4483ec?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt="Option 1"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/374894cc171fd67ff99b067fbac319ece313d605d0c45beb4fef29a9782de6b9?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt="Option 2"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col mt-4 w-full text-xs leading-relaxed">
        <div className="flex gap-10 justify-between items-center px-3 py-2 w-full rounded-lg bg-neutral-900">
          <div className="self-stretch my-auto text-gray-400">Tài sản ròng</div>
          <div className="self-stretch my-auto font-semibold text-white">0</div>
        </div>
      </div>
    </section>
  );
};

export default AssetSummary;
