function myFun(array1,array2){
    for( i=0;i<array1.length;i++){
        for(j=0;j<array2.length;j++){
            if(array1[i]*array1[i] == array2[j]){
                return "true";

            }
        }
        return "false";
    }
    
}
console.log(myFun([1,4,2,3],[9,4,1]));