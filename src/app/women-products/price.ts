export class Price {
  constructor(
      public priceUnder500:boolean,
      public priceUnder1000:boolean,
      public priceUnder2000:boolean,
      public priceUnder5000:boolean,
      public priceUnder10000:boolean
  ){}
}
