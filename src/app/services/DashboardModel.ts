export interface DashboardCustomerDetailsRequest{
    accountNo:string;
}
export interface DashboardCustomerDetailsResponse{
    responseCode: string,
    responseMessage: string,
    AvailableBalance: string,
    LedgerBalance: string,
    WithdrawableBalance: string,
    AccountType: string,
    
}

export interface FundAccountRequest{
    RetrievalReference:string;
    AccountNumber:string;
    Amount:number;
    Narration:string;

}
export interface FundAccountResponse{
    responseCode:string;
    responseMessage:string;
}

export interface TransHistoryReq{
    accountNo:string;
}
export interface TransHistoryResp{
    transID:number;
    transDate:string;
    transRef:number;
    amount:number;
    narration:string;
}