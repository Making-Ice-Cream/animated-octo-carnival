setInterval(startTime ,1000);
function startTime() {
    let date  = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    am = "PM";
    if(h>12)
    {
        h-=12;
        am="PM";
    }
    if(h==0)
    {
        h = 12;
        am="AM";
    }
   h=  h < 10 ? "0" + h : h;
   m=  m < 10 ? "0" + m : m;
   s =  s < 10 ? "0" + s : s;
    let curr = h +":" + m + ":" + s +" "+ am;
   
    console.log(curr);
    document.getElementById('time').innerHTML = curr;


}
startTime();