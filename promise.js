//here i am work with js promise

var myPromise = new Promise(function(resolve, reject){  
   
    var x= 2+3;  
    
    if(x==5)  
     
    resolve(" executed and resolved successfully");  
   
    else  
   
    reject("rejected");  
   
});  
   
myPromise.then(function(fromResolve){  
   
    console.log("Promise is " +fromResolve);  
   
    }).catch(function(fromReject){  
   
       console.log("Promise is "+fromReject);  
     });  