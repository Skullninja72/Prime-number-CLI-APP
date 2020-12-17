var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv =document.querySelector("#output");




 btntranslate.addEventListener("click",clickHandler);
 
// Function to check for prime number 
function checkPrime(n) { 
                
 var i, flag=0, op; 
      
    n1 = parseInt(n) //convert String ip to Integer
    for (i = 1; i <n1; i++) {
        if (n % i == 0) { 
            flag =flag+1; 
            
        } 


    }
    if(flag>1){
        op=" not prime";
    }
    else{
         op=" prime";
    }

    return op;

}

    
          
   
    
function clickHandler() {
    var n = txtInput.value; //ip
    var result=checkPrime(n);//process
     
    outputDiv.innerText=result;//opgui

    
   

};


