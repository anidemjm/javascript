// Developer by José Manuel Medina Ruiz

function starTime() {
    let hoy = new Date();
    let h = hoy.getHours();
    let m = hoy.getMinutes();
    let s = hoy.getSeconds();
    let day = hoy.getDate();
    let month = hoy.getUTCMonth();
    let year = hoy.getFullYear();
  
    m = checkTime(m);
    s = checkTime(s);
    
    
    document.getElementById("fecha").innerHTML =  day + "-" + month + "-" + year;
    document.getElementById("hora").innerHTML = h + ":" + m + ":" + s;
    
    let t = setTimeout(starTime, 300);
  }
  function checkTime(e) {
    if (e < 10) {
      e = "0" + e;
    }
    return e;
  }
  