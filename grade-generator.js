
function gradeCalculator(marks){
  let grade;
// marks is between 79 - 100
  if(marks >79 && marks <= 100){
    grade= "A"
    console.log(grade)

    // marks is between 60 - 79
  }else if (marks >=60 & marks <=79){
    grade= "B"
    console.log(grade)
// marks is between 49 - 59
  }else if (marks >49 & marks <59){
    grade= "C"
    console.log(grade)
    // marks is between 40 - 49
  }else if (marks >=40 & marks <=49){
    grade= "D"
    console.log(grade)
    // marks is between 0 - 39
  }else if (marks >0 & marks <=40){
    grade= "E"
    console.log(grade)

  }else{
    console.log( "input Valid Marks")

  }
  // returns grade based on marks
  return grade
}
gradeCalculator(128)