var sqr1;
var sqr2;
var sqr3;
var sqr4;
var sqr5;
var sqr6;
var sqr7;
var sqr8;
var sqr9;
var sqr1T = 0;
var sqr2T = 0;
var sqr3T = 0;
var sqr4T = 0;
var sqr5T = 0;
var sqr6T = 0;
var sqr7T = 0;
var sqr8T = 0;
var sqr9T = 0;
var moveCount = 0;
var turn = 0;

function vari()
{
sqr1 = document.tic.sqr1.value
sqr2 = document.tic.sqr2.value
sqr3 = document.tic.sqr3.value
sqr4 = document.tic.sqr4.value
sqr5 = document.tic.sqr5.value
sqr6 = document.tic.sqr6.value
sqr7 = document.tic.sqr7.value
sqr8 = document.tic.sqr8.value
sqr9 = document.tic.sqr9.value
}
function check()
{
if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
{
alert("You Win!")
reset()
}
else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ")
{
alert("You Win!")
reset()
}
else
{
winCheck()
check2()
drawCheck()
}
}

function check2()
{
vari()
drawCheck()
if(sqr1 == " O " && sqr2 == " O " && sqr3 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr4 == " O " && sqr5 == " O " && sqr6 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr7 == " O " && sqr8 == " O " && sqr9 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr1 == " O " && sqr4 == " O " && sqr7 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr2 == " O " && sqr5 == " O " && sqr8 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr3 == " O " && sqr6 == " O " && sqr9 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
{
alert("You Lose!")
reset()
}
else if(sqr3 == " O " && sqr5 == " O " && sqr7 == " O ")
{
alert("You Lose!")
reset()
}
}

function drawCheck()
{
vari()
moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T
if(moveCount == 9)
{
reset()
alert("Draw")
}
}

function winCheck()
{
check2()
if(sqr1 == " O " && sqr2 == " O " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr2 == " O " && sqr3 == " O " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr4 == " O " && sqr5 == " O " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr5 == " O " && sqr6 == " O " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr7 == " O " && sqr8 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr8 == " O " && sqr9 == " O " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr5 == " O " && sqr9 == " O " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr5 == " O " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr7 == " O " && sqr5 == " O " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr3 == " O " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr4 == " O " && sqr6 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr7 == " O " && sqr9 == " O " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr7 == " O " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr2 == " O " && sqr8 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr9 == " O " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr4 == " O " && sqr7 == " O " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr5 == " O " && sqr8 == " O " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr6 == " O " && sqr9 == " O " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr4 == " O " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr2 == " O " && sqr5 == " O " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr6 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr9 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr7 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else
{
computer()
}
check2()
}
function computer()
{
check2()
if(sqr1 == " X " && sqr2 == " X " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr2 == " X " && sqr3 == " X " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr4 == " X " && sqr5 == " X " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr5 == " X " && sqr6 == " X " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr7 == " X " && sqr8 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr8 == " X " && sqr9 == " X " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr5 == " X " && sqr9 == " X " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr5 == " X " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr7 == " X " && sqr5 == " X " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr3 == " X " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr4 == " X " && sqr6 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr7 == " X " && sqr9 == " X " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr7 == " X " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else
{
AI()
}
check2()
}

function AI()
{
vari()
if(document.tic.sqr5.value == "     " && turn == 1)
{
document.tic.sqr5.value = " O "
turn = 0
sqr5T = 1
}
else if(document.tic.sqr1.value == "     " && turn == 1)
{
document.tic.sqr1.value = " O "
turn = 0
sqr1T = 1
}
else if(document.tic.sqr9.value == "     " && turn == 1)
{
document.tic.sqr9.value = " O "
turn = 0
sqr9T = 1
}
else if(document.tic.sqr6.value == "     " && turn == 1)
{
document.tic.sqr6.value = " O "
turn = 0
sqr6T = 1
}
else if(document.tic.sqr2.value == "     " && turn == 1)
{
document.tic.sqr2.value = " O "
turn = 0
sqr2T = 1
}
else if(document.tic.sqr8.value == "     " && turn == 1)
{
document.tic.sqr8.value = " O "
turn = 0
sqr8T = 1
}
else if(document.tic.sqr3.value == "     " && turn == 1)
{
document.tic.sqr3.value = " O "
turn = 0
sqr3T = 1
}
else if(document.tic.sqr7.value == "     " && turn == 1)
{
document.tic.sqr7.value = " O "
turn = 0
sqr7T = 1
}
else if(document.tic.sqr4.value == "     " && turn == 1)
{
document.tic.sqr4.value = " O "
turn = 0
sqr4T = 1
}
check2()
}

function reset()
{
document.tic.sqr1.value = "     "
document.tic.sqr2.value = "     "
document.tic.sqr3.value = "     "
document.tic.sqr4.value = "     "
document.tic.sqr5.value = "     "
document.tic.sqr6.value = "     "
document.tic.sqr7.value = "     "
document.tic.sqr8.value = "     "
document.tic.sqr9.value = "     "
sqr1T = 0;
sqr2T = 0;
sqr3T = 0;
sqr4T = 0;
sqr5T = 0;
sqr6T = 0;
sqr7T = 0;
sqr8T = 0;
sqr9T = 0;
vari()
turn = 0;
moveCount = 0;
}

function begining1(){
if(document.tic.sqr1.value == '     ' && turn == 0)
{
document.tic.sqr1.value = ' X ';
sqr1T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining2(){
if(document.tic.sqr2.value == '     ' && turn == 0)
{
document.tic.sqr2.value = ' X ';
sqr2T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining3(){
if(document.tic.sqr3.value == '     ' && turn == 0)
{
document.tic.sqr3.value = ' X ';
sqr3T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining4(){
if(document.tic.sqr4.value == '     ' && turn == 0)
{
document.tic.sqr4.value = ' X ';
sqr4T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining5(){
if(document.tic.sqr5.value == '     ' && turn == 0)
{
document.tic.sqr5.value = ' X ';
sqr5T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining6(){
if(document.tic.sqr6.value == '     ' && turn == 0)
{
document.tic.sqr6.value = ' X ';
sqr6T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining7(){
if(document.tic.sqr7.value == '     ' && turn == 0)
{
document.tic.sqr7.value = ' X ';
sqr7T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining8(){
if(document.tic.sqr8.value == '     ' && turn == 0)
{
document.tic.sqr8.value = ' X ';
sqr8T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function begining9(){
if(document.tic.sqr9.value == '     ' && turn == 0)
{
document.tic.sqr9.value = ' X ';
sqr9T = 1; turn = 1;
vari();
check();
}
drawCheck();
}
function description(){
document.getElementById("des").innerHTML = " ";
document.getElementById("des1").innerHTML = " ";
}
