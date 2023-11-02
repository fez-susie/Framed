setInterval(
    function screen(){
        if (window.innerWidth > window.innerHeight) {
            document.getElementById("laptop").style.display="block";
            document.getElementById("mobile").style.display="none";
        }
        else {
            document.getElementById("laptop").style.display="none";
            document.getElementById("mobile").style.display="block";
        }
    },
1);