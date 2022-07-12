//disable inspect script




// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();

// });
// document.onkeydown = function(e) {
//     if (event.keyCode == 123) {
//         return false;

//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAT(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAT(0)) {
//         return false;
//     }

//     if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAT(0)) {
//         return false;
//     }

//     if (e.ctrlKey && e.keyCode == "U".charCodeAT(0)) {
//         return false;
//     }



// }

//solid navigation
let navi = document.getElementById("nav");
window.onscroll = () => {
    if (window.pageYOffset > 50) {
        navi.classList.add("nav-bg");
    } else {
        navi.classList.remove("nav-bg")
    }
}


let hamburger = document.getElementById("tog");
let slideMenu = document.getElementById("navMenu");
let closeMenu = document.getElementById("close");
// let link = document.querySelector("#link");
hamburger.onclick = () => {
    slideMenu.classList.toggle('slideIn');


}
closeMenu.onclick = () => {
    slideMenu.classList.remove("slideIn");
}
$(".link").click(function() {
    slideMenu.classList.remove("slideIn");
});
// link.onclick = function() {
//     slideMenu.classList.remove("slideIn");
// }


//back to top

let Topup = document.getElementById('back_to_top');
window.addEventListener('scroll', function() {

    if (window.pageYOffset > 100) {
        Topup.classList.add('Top');

    } else {
        Topup.classList.remove('Top');

    }

});
Topup.onclick = () => {
    window.scrollTo(0, 0);
}