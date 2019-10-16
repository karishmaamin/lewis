function preheader_function() {
    document.getElementById("preheader-subcontent").classList.toggle("show");
}


function hamburger_function() {
    
    document.getElementById("myTopnav").classList.toggle("responsive");
    document.getElementById("avoidscroll").classList.toggle("modal-open");
   
    if(document.getElementById("myTopnav").className=="header__nav responsive"){
        document.getElementById("hamburger").style.display = "none";
        document.getElementById("close-btn").style.display = "block";
        document.getElementById("preheaderLeft").style.display="block";
       
    }
    else{
        document.getElementById("hamburger").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
        document.getElementById("preheaderLeft").style.display="none";
    }

   
   

}

window.onscroll = function(){headerfixed()};
function headerfixed() 
{
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}

