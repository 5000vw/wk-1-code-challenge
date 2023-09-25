
function speedDetector (speed){
    let demerit
    let text
    if(speed < 70){
        console.log( "Ok") 
    }
   demerit = Math.floor((speed-70)/5);
   if(demerit > 12){
    console.log( "License Suspended");
    } else{
     console.log(`Points: ${demerit}`);
    }
    return text
}

speedDetector(467)