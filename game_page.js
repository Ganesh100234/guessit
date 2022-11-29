player1=localStorage.getItem("player1name");
player2=localStorage.getItem("player2name");
player1score=0;
player2score=0;

document.getElementById("p1name").innerHTML=player1+":";
document.getElementById("p2name").innerHTML=player2+":";
document.getElementById("p1score").innerHTML=player1score
document.getElementById("p2score").innerHTML=player2score

document.getElementById("question").innerHTML="question turn-"+player1
document.getElementById("answer").innerHTML="answer turn-"+player2

function send()
{
    get_word=document.getElementById("word").value
    word =get_word.toLowerCase();

    char1 =word.charAt(1);
    len =Math.floor(word.length/2);
    char2 =word.charAt(len);
    mine =word.length-1
    char3 =word.charAt(mine);

    r1=word.replace(char1,"_");
    r2=r1.replace(char2,"_");
    r3=r2.replace(char3,"_");

    q="<h4 id='word'>Q."+r3+"</h4>";
    input="<br>answer.<input type='text' id='check'>";
    cb="<br><br> <button class='btn btn-info' onclick='check()'>check </button>";

    row=q+input+cb;
    document.getElementById("output").innerHTML=row
}


question_turn="player1";
answer_turn="player2";


function check(){
get_ans=document.getElementById("check").value
answer=get_ans.toLowerCase()

if(answer==word)
{
if(answer_turn=="player1")
{
    player1score=player1score+1
    document.getElementById("p1score").innerHTML=player1score
}
else
{
    player2score=player2score+1
    document.getElementById("p2score").innerHTML=player2score
}


}
if(question_turn=="player1")
{
    question_turn="player2";
    document.getElementById("question").innerHTML="question turn-  "+player2;
}
else 
{
    question_turn="player1";
    document.getElementById("question").innerHTML="question turn-  "+player1;
}



if(answer_turn=="player1")
{
    answer_turn="player2";
    document.getElementById("answer").innerHTML="answer turn-  "+player2;
}
else 
{
    answer_turn="player1";
    document.getElementById("answer").innerHTML="answer turn-  "+player1;
}
document.getElementById("output").innerHTML=""
}
