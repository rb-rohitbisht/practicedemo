// this is a code to find a given year is leaf year or not
//leaf year are those which are comes after 4 year
 function leafYear(year){

    if(year % 4 == 0 && year % 100 !== 0 || year % 400 ==0){

        console.log(year,"is a leaf year")

    }
    else{
    console.log(year,"is not a leaf year");
    }
    
 }
    console.log(leafYear(2002));