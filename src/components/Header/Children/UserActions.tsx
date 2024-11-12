import React from 'react';
const UserActions: React.FC = () => {
  return (
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
          aria-label="Notifications"
          className="flex flex-col items-center self-stretch my-auto w-6"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4941ba7709a711102f020b23fb14c735140883d1eed112ac320006a025d223?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt=""
            className="object-contain w-6 aspect-square"
          />
        </button>
        <button aria-label="Messages" className="flex items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a5d834209a09c4a74060fcbc6c34c97baa9b9b9f3f24b61101dc7fd30ca673?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
        <button aria-label="Settings" className="flex items-center self-stretch my-auto">
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
  );
};

export default UserActions;
