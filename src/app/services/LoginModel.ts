export interface ConfirmAccountRequest{
    AccountNo:string;

}
export interface ConfirmAccountResponse{
    responseCode:string;
    responseMessage:string;
    CustomerID:string;
    Name:string;
    Email:string;
    Phone:string;


}