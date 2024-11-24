export interface Currency {
  name: string;
  symbol: string;
}

export interface Country {
  name: {
    common: string;
    official: string;
  };
  currencies: {
    [key: string]: Currency;
  };
  languages: {
    [key: string]: string;
  };
  capital: string[];
  region: string;
  flags: {
    png: string;
    svg: string;
  };
}