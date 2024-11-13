'use client';
import React, { useEffect, useRef, memo } from 'react';
interface TradingViewWidgetProps {
  width: number;
  height: number;
  symbol?: string;
  interval?: string;
  timezone?: string;
  theme?: string;
  style?: string;
  locale?: string;
  autosize?: boolean;
  allowSymbolChange?: boolean;
  calendar?: boolean;
  supportHost?: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  height = 500,
  width = 980,
  symbol = 'NASDAQ:AAPL',
  interval = '240',
  timezone = 'Asia/Ho_Chi_Minh',
  theme = 'dark',
  style = '1',
  locale = 'en',
  autosize = true,
  allowSymbolChange = true,
  calendar = false,
  supportHost = 'https://www.tradingview.com',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content to avoid duplicate widgets
      containerRef.current.innerHTML = '';

      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize,
        height,
        width,
        symbol,
        interval,
        timezone,
        theme,
        style,
        locale,
        allow_symbol_change: allowSymbolChange,
        calendar,
        support_host: supportHost,
      });
      containerRef.current.appendChild(script);
    }
  }, [
    autosize,
    height,
    width,
    symbol,
    interval,
    timezone,
    theme,
    style,
    locale,
    allowSymbolChange,
    calendar,
    supportHost,
  ]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container w-full h-[calc(100vh-4rem)] mt-3"
    >
      <div className="tradingview-widget-container__widget h-full w-full"></div>
    </div>
  );
};

export default memo(TradingViewWidget);
