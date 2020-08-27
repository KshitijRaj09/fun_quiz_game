(function(){
    var Question = function (question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

var questionList = [];
var questionObject;
var score=0;
var flag=true;

function createQuestion(question, answer, correctAnswer) {

    questionObject = new Question(question, answer, correctAnswer);
    questionList.push(questionObject);
}


createQuestion("What is my name", ["John", "Kshitij", "Ankit", "Ram"], 2);
createQuestion("What is the correct syntax for referring to an external script called 'xxx.js'?", ["<script src='xxx.js'> ", "<script name='xxx.js'></script>", "<script href='xxx.js'>"], 1);
createQuestion("The external JavaScript file must contain the <script> tag.", ["False", "True"], 1);
createQuestion("How do you create a function in JavaScript?", ["function = myFunction()", "function:myFunction()", "function myFunction()"], 3);
createQuestion("How can you add a comment in a JavaScript?", ["<!--This is a comment-->", "'This is a comment", "//This is a comment"], 3);
createQuestion("How do you round the number 7.25, to the nearest integer?", ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"], 4);
createQuestion("How do you find the number with the highest value of x and y?",["ceil(x, y)","Math.ceil(x, y)","Math.max(x, y)","top(x, y)"],3);
createQuestion("JavaScript is the same as Java.",["False","True"],1);
createQuestion("Which event occurs when the user clicks on an HTML element?", ["onchange","onmouseclick","onmouseover","onclick"],4);
createQuestion("How do you declare a JavaScript variable?",["variable carName;","var carName;", "v carName;"],2);



do{
    (function questionShow() {
    var j = Math.floor(Math.random() * 10);
    var ques = questionList[j];
    console.log(ques.question);
    for(var i=0;i<ques.answer.length;i++){
        console.log(i+1+". "+ ques.answer[i]);
    }
    var userAnswer = prompt("Your answer ","");
    function checkAnswer(){
        if(userAnswer != null){
            if(userAnswer == ques.correctAnswer){
                
                console.log("your answer is correct " + ques.correctAnswer);
                score++;
            }
            else if(userAnswer.toUpperCase()=="EXIT"){
                flag=false;
            }
            else{
                console.log("Incorrect Answer ");
            }
            console.log("score "+score);
            console.log(".........................");
        }
    }
    checkAnswer();
    if(flag===false){
        console.log("final Score "+score);
        return ;
    }
})();
}
while(flag);
})();

console.log(flag);

