interface NewsFeedType {
  title: string;
  link: string;
  linkimg: string;
  summ: string;
  time: string;
}

interface Stock {
  symbol: string;
  full_name: string;
  description: string;
  exchange: string;
  type: string;
}

export type { NewsFeedType, Stock };
