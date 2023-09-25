// function to calculate demerit based on speed
function speedDetector (speed){
    let demerit
    let text
    // if speed is less than 70 it print ok
    if(speed < 70){
        console.log( "Ok") 
    }
    // calculate demerit based on speed more than 70, it increments on every 5kms
   demerit = Math.floor((speed-70)/5);
    //    if demerit is more than 12 it prints License suspended
   if(demerit > 12){
    console.log( "License Suspended");
    }
    // else if print the number of demerits
    else{
     console.log(`Points: ${demerit}`);
    }
}

speedDetector(467)