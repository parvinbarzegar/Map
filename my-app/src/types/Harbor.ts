
export default interface IHarborData {
    id?: any | null,
    name: string,
    image: string,
    lat : number| string ,
    lon : number| string,
    isPriceHidden?: boolean,
    isFree : boolean,
    canBook : boolean,
    cashOnlyBookings : boolean,
    notActivated : boolean,
    translations : {
        id : number,
        name : string,
        content : string,
        locale : string
    } [],
    wordpressLink : string,
    acceptBankPayments : boolean,
    acceptEpayPayments : boolean,
    acceptGoCardlessPayments : boolean,
    subscribedBerthsHiddenFromGuests : boolean,
    bookOneDayOnly : boolean
  }