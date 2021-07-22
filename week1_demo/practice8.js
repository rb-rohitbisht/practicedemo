// in this code i am work with string method like slice,replace,touppercase,tolowercase

 let newstring = (str)=>{
     let a = str.toUpperCase();
     let b = str.toLowerCase();
     let c = str.slice(0,3);
     console.log(`In upper case ${a}`);
     console.log(`In lower case ${b}`);
     console.log(`after extract 0 to 3 index ${c}`);
 }
  console.log(newstring("the maountains are more beautiful"));
