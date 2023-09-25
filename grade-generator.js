
function gradeCalculator(marks){
  let grade;

  if(marks >79 && marks <= 100){
    grade= "A"
    console.log(grade)

    
  }else if (marks >=60 & marks <=79){
    grade= "B"
    console.log(grade)

  }else if (marks >49 & marks <59){
    grade= "C"
    console.log(grade)
  }else if (marks >=40 & marks <=49){
    grade= "D"
    console.log(grade)
  }else if (marks >0 & marks <=40){
    grade= "E"
    console.log(grade)

  }else{
    console.log( "input Valid Marks")
    
  }
  return grade
}
gradeCalculator(128)