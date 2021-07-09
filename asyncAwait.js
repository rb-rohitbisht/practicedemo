//"async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

//here i am work with js promise

async function myDisplay() 
{  
    let myPromise = new Promise(function(myResolve, myReject)
     {  
      setTimeout(function() {
        
        let flag = true;
        if(flag){

            myResolve("fullfilled");
        }
        else{
            myReject("not fullfilled");
        }
    },3000);
    });  
    console.log( await myPromise);  
  }  
  myDisplay(); 