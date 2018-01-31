function main(){
     let a = 5, b = 10;
    // c = sumnumbers(a,b);
    // alert(c);
    let score;
    score = prompt("Enter score");
    let g = getGrade(score);
    alert(g);
   
}

function sumnumbers(a,b){
    return a + b;
}

function getGrade(score) {
    alert (score);
    let grade;
    if ((score > 25) && (score <= 30)){
        grade = 'A';
    }
    else if ((score > 20) && (score <= 25))
        grade = 'B';
    else if ((score > 15) && (score <= 20))
        grade = 'C';
    else if ((score > 10) && (score <= 15))
        grade = 'D';
    else if ((score > 5) && (score <= 10))
        grade = 'E';
   else if ((score > 0) && (score <= 5))
        grade = 'F';            
    return grade;
}
main();
