const lastdate = "2 Oct 2022";


function timer()
{
  const newYearDate = new Date(lastdate);
   const currentDate = new Date();

  //  const secRemaining = (newYearDate - currentDate)/1000;
  const tsec = (Math.floor((newYearDate - currentDate)/1000));
  // console.log(tsec);
    const tdays = Math.floor(tsec/(3600*24));
  document.getElementById("secondss").innerHTML=tsec;
  //console.log(tdays);
  const thours = Math.floor(tsec/3600) % 24;
  //console.log(thours);
  const tmin = Math.floor(tsec/60) % 60;
  // console.log(tmin);
  // console.log(tsec%60);
  document.getElementById("minss").innerHTML=tmin;
  document.getElementById("hourss").innerHTML=thours;
  document.getElementById("dayss").innerHTML=tdays;
  document.getElementById("secondss").innerHTML=tsec%60;

}

timer();

// console.log(~~(4/3));

 setInterval(timer,1000);

