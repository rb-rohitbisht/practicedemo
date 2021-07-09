//asynchronous function - a function running parallel with other function

function asynchrous (){ setTimeout (function () {

    for( let index = 0 ; index<=20; index ++){

        console.log("running"+ index);
    };
}, 4000);
console.log('work done');// asynchronous, this work done is print before exicute of for loop ,for loop is running parallel and print index after 4 seconds
}

//synchronous

for( let index=0; index<=30; index++){
    console.log("running"+index)
}
console.log("work done");//this work done is print after the index = 30

asynchrous();