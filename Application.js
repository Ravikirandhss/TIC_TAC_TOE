var elx=0,u1s=0,u2s=0,t;
window.onload=function()
{
  var nam1=prompt("Enter Name Of User1");
  var nam2=prompt("Enter Name of User2");
  var u11=document.getElementById('User1');
  var u22=document.getElementById('User2');
  u11.innerHTML=nam1;
  u22.innerHTML=nam2;
}
function func(name)
{
  var el1=document.getElementById(name);
  if(el1.innerHTML=='')
{
  if(elx%2==0)
  {
  el1.innerHTML='X';el1.style.color='red';
}
  else
  {
  el1.innerHTML='O';el1.style.color='blue';
}
  elx++;
  check(elx);
}
}
function check(num)
{
  var arr=new Array("aa","ba","ca","ab","bb","cb","ac","bc","cc");
  var arr3=new Array(9);
  var stt=document.getElementById('status1');
  for(var i=0;i<9;i++)
  arr3[i]=(document.getElementById(arr[i])).innerHTML;
  if((num<9)&&(((arr3[0]==arr3[1])&&(arr3[2]==arr3[1]))||((arr3[0]==arr3[3])&&(arr3[0]==arr3[6]))||((arr3[0]==arr3[4])&&(arr3[0]==arr3[8]))))
  {
    prnt(arr3[0]);
  }
  if((num<9)&&(((arr3[4]==arr3[2])&&(arr3[4]==arr3[6]))||((arr3[4]==arr3[1])&&(arr3[4]==arr3[7]))||((arr3[4]==arr3[3])&&(arr3[4]==arr3[5]))))
  {
    prnt(arr3[4]);
  }
  if((num<9)&&(((arr3[8]==arr3[5])&&(arr3[8]==arr3[2]))||((arr3[8]==arr3[7])&&(arr3[8]==arr3[6]))))
  {
    prnt(arr3[8]);
  }
  if(num==9)
  {
  stt.innerHTML="Draw";
  stt.style.color="green";
  alert("Draw");
  t=setInterval(rset,1000);
}
}
function rset()
{
  clearInterval(t);
  var arr=new Array("aa","ba","ca","ab","bb","cb","ac","bc","cc");
  for(var i=0;i<9;i++)
  (document.getElementById(arr[i])).innerHTML='';
  elx=0;
  //(document.getElementById('status1')).innerHTML='';
}
function prnt(k)
{
    var stn=document.getElementById('status1');
    var u1=document.getElementById('User1s');
    var u2=document.getElementById('User2s');
    if(k=='X')
    {
      stn.innerHTML="<b>X Wins</b>";stn.style.color="Red";
      u1.innerHTML=++u1s;
      alert("X Wins");
      t=setInterval(rset,1000);
    }
    else if(k=='O')
    {
      stn.innerHTML="<b>O Wins</b>";stn.style.color="Blue";
      u2.innerHTML=++u2s;
      alert("O Wins");
      t=setInterval(rset,1000);
    }
}
function rst()
{
  var arr=new Array("aa","ba","ca","ab","bb","cb","ac","bc","cc");
  for(var i=0;i<9;i++)
  (document.getElementById(arr[i])).innerHTML='';
  elx=0;
  (document.getElementById('status1')).innerHTML='';
  var u1=document.getElementById('User1s');
  var u2=document.getElementById('User2s');
  u1.innerHTML=u2.innerHTML=0;
  u1s=u2s=0;
}
