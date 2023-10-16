var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navi").style.top = "0";
  } else {
    document.getElementById("navi").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function homeNavi(){
  document.getElementById('main_window').style.display='flex'; document.getElementById('sub_window').style.display='none';document.getElementById('footer').style.display='block';
}