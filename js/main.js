let toup = document.querySelector(".toup");
window.onscroll = function(){
    if (scrollY>100){
        toup.style.display="block";
    }else{
        toup.style.display="none";
    }
}
toup.onclick = function(){
    window.scrollTo(0,0);
}


// let nav = document.querySelector("#navbar");
// let X = document.querySelectorAll("nav-link");

// window.onscroll = function(){
//     let scrollTop = scrollY;
//     if(scrollTop > 0){
//         nav.style.background= "#FFF";
//         X.style.color= "#0F0";
//     }else{
//         nav.style.background= "#a82d49";
//         X.style.color= "#ffcfcf";
//     }
// }

