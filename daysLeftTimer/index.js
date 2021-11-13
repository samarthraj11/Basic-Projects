const lastdate = "2 Oct 2022";


function timer()
{
  const newYearDate = new Date(lastdate);
   const currentDate = new Date();
  const tsec = (Math.floor((newYearDate - currentDate)/1000));
    const tdays = Math.floor(tsec/(3600*24));
  document.getElementById("secondss").innerHTML=tsec;
  const thours = Math.floor(tsec/3600) % 24;
  const tmin = Math.floor(tsec/60) % 60;
  document.getElementById("minss").innerHTML=tmin;
  document.getElementById("hourss").innerHTML=thours;
  document.getElementById("dayss").innerHTML=tdays;
  document.getElementById("secondss").innerHTML=tsec%60;

}

timer();
 setInterval(timer,1000);

