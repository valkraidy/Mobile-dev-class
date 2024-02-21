//Write a program to generate a password using alphanumeric characters






//2.math.random
//3.function


function genPassword (){
console.log(
    Math.random().toString(36).slice(2)
)
}
genPassword()