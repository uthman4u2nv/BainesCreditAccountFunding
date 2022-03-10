const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack() {

  //e.preventDefault();

  let handler = PaystackPop.setup({

    key: 'pk_test_c8338f075e5ce8b8c4a93b6d3a202017421c3162', // Replace with your public key

    email: localStorage.getItem("Email"),

    amount:localStorage.getItem("Amount")*100,

    ref: '388393'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function(){

      alert('Window closed.');

    },

    callback: function(response){


      let message = 'Payment complete! Reference: ' + response.data.status;

      let payloaddata={
        RetrievalReference:response.reference,
        AccountNumber:localStorage.getItem("AccountNo"),
        Amount:localStorage.getItem("Amount"),
        Narration:"Funding of Account"
      }

      alert(message);
      alert(payloaddata);


      

    }

  });

  handler.openIframe();

}