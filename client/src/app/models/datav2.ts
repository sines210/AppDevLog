export interface DataV2{
      
    "stats": {
      "total": number,
      "totalCoins": number,
      "totalMarkets": number,
      "totalExchanges": number,
      "totalMarketCap": string,
      "total24hVolume": string
    },
    "coins": [
      {
        "uuid": string,
        "symbol": string,
        "name": string,
        "color": string,
        "iconUrl": string,
        "marketCap": string,
        "price": string,
        "btcPrice": string,
        "listedAt": number,
        "change": string,
        "rank": number,
        "sparkline": [],
        "coinrankingUrl": string,
        "24hVolume": string,
      }
    ]
  }

export interface Stats {
      "total": number,
      "totalCoins": number,
      "totalMarkets": number,
      "totalExchanges": number,
      "totalMarketCap": string,
      "total24hVolume": string
       }


export interface Coins{
        "uuid": string,
        "symbol": string,
        "name": string,
        "color": string,
        "iconUrl": string,
        "marketCap": string,
        "price": string,
        "btcPrice": string,
        "listedAt": number,
        "change": string,
        "rank": number,
        "sparkline": [],
        "coinrankingUrl": string,
        "24hVolume": string,
       }





