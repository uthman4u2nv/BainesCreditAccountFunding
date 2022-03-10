import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmAccountRequest,ConfirmAccountResponse } from '../../../../services/LoginModel';
import { AuthserviceService } from '../../../../services/authservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: any;
  @Input() Obj={accountNo:""}
  @Input() Obj2={otp:0}
  otp:number;
  DisplayOTPBox:boolean=false;
  confirmButtonDisplay:boolean=true;
  confirmBtn:string="Confirm Account";
  errorMessage:string="";
  displayError:boolean=false;

  successMessage:string="";
  displayMessage:boolean=false;

  constructor(private router: Router, private route: ActivatedRoute,public AuthServ:AuthserviceService) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    localStorage.setItem('isLoggedin', 'false');
    localStorage.setItem("Name","");
    localStorage.setItem("Email","");
    localStorage.setItem("Phone","");
    localStorage.setItem("CustomerID","");
    localStorage.setItem("AccountNo","");
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  enterOTP(e){
    this.otp=e;

  }
  onLoggedin(e) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate([this.returnUrl]);
    }
  }
  Login(){
    console.log("OTP:"+this.otp)
    if(localStorage.getItem("Name") !=="" && this.otp==123456){
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigate([this.returnUrl]);
    }else{
      this.displayMessage=false;
      this.successMessage="";
      this.errorMessage="Invalid OTP, please check and try again";
      this.displayError=true;
    }
  }

  ConfirmAccount(data:ConfirmAccountRequest){
    this.displayError=false;
      this.errorMessage="";
      this.displayMessage=false;
      this.successMessage="";
    this.confirmBtn="Confirming Account, please wait..";
    this.AuthServ.ConfirmAccountNo(data).subscribe(d=>{
     console.log(d);
     if(d.responseCode =="00"){
       localStorage.setItem("Name",d.Name);
       localStorage.setItem("Email",d.Email);
       localStorage.setItem("Phone",d.Phone);
       localStorage.setItem("CustomerID",d.CustomerID);
       localStorage.setItem("AccountNo",this.Obj.accountNo);
      this.confirmButtonDisplay=false;
      this.Obj={accountNo: this.Obj.accountNo}
      this.DisplayOTPBox=true;
      this.displayMessage=true;
      this.successMessage="Please enter the OTP sent to your registered phone";
    }else{
      this.displayError=true;
      this.errorMessage=d.responseMessage;
      this.displayMessage=false;
      this.successMessage="";
      localStorage.setItem("Name","");
    localStorage.setItem("Email","");
    localStorage.setItem("Phone","");
    localStorage.setItem("CustomerID","");
    localStorage.setItem("AccountNo","");
    }
    
    },error=>{
      this.displayError=true;
      this.errorMessage="Problem connecting to server";
      console.log("Problem connecting to server:")
    });
    this.confirmBtn="Confirm Account";
  }

}
