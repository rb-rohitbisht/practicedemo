//try catch 

try{  
    var a= ["34","32","5","31","24","44","67"]; //a is an array  
    console.log(a);    // displays elements of a  
    console.log(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked  
    }catch(error){  
    console.log("There is error which shows "+error.message); //Handling error  
    }  