/*import { Base, Coins, Stats  } from '/var/www/html/Angular/dev_mobile_app/src/app/models/model';*/


export interface Data{
       base:{
              symbol: string,
      	       sign: string
},
       coins:[
        id: number,
       uuid: string,
       slug: string,
       symbol: string,
       name: string,
       description: string,
       color: string,
       iconType: string,
       iconUrl: string,
       websiteUrl: string,
       socials: [
       name: string,
       url: string,
       type: string
],
       links: [
       name: string,
       type: string,
       url: string
],
       confirmedSupply: boolean,
       numberOfMarkets: number,
       numberOfExchanges: number,
       type: string,
       volume: number,
       marketCap:number,
       price: string,
       circulatingSupply: number,
       totalSupply: number,
       approvedSupply: boolean,
       firstSeen: number,
       listedAt: number,
       change: number,
       rank: number,
       history: [],
       allTimeHigh: {
 price: string,
       timeStamp: number
},
       penalty: boolean
       ],
       stats:{
       total: number,
       offset: number,
       limit: number,
       order: string,
       base: string,
       totalMarkets: number,
       totalExchanges: number,
       totalMarketCap: number,
       total24hVolume: number
}
}







