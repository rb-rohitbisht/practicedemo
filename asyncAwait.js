//"async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

//here i am work with js promise


async function myDisplay() 
{  
    try{
    let myPromise = new Promise(function(myResolve, myReject)
     {  
      setTimeout(function() {
        
        let flag = false;
        if(flag){

            myResolve("fullfilled");
        }
        else{
             myReject('not fullfilled')
        }
       
        
    },4000);
    });  
   
    //    myPromise.then(function(resolve)
    //                                 {
    //                                     console.log("promise"+resolve )
    //                                 }
    //                  )
           
        

    console.log( await myPromise);  





}

catch(error){

console.log("error is " +error)
}
}
  myDisplay();

  

