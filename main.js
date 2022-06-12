console.log("start")

window.addEventListener("scroll", onScroll);

function onScroll() {
  for (var item of document.querySelectorAll(".viss")) {
    elementVisible(item);
  }
}

function elementVisible(el) {
  let top = el.offsetTop;
  let height = el.offsetHeight;
  let bottom = top + height;



  let IsOverBottom = top > ( window.pageYOffset+(window.innerHeight/2));
  let IsBeforeTop = bottom < (window.pageYOffset+ (window.innerHeight/2));

  if (!IsOverBottom && !IsBeforeTop) {

    console.log("#"+el.id.replace("-viss", "")); 
    header_button = document.querySelector("#"+el.id.replace("-viss", ""));
    header=document.querySelector("#nav-bg")


    header_button.classList.add('active');

    console.log(header_button.offsetLeft); 
    console.log(header.offsetLeft); 

    value=header_button.offsetLeft-header.offsetLeft-(header.clientWidth/2) + header_button.clientWidth/2; 
    console.log(value); 

    header.scrollLeft = value; 

    console.log(header.scrollLeft)
  }
  else{
    document.querySelector("#"+el.id.replace("-viss", "")).classList.remove('active'); 
  }
}

scrollPrev = 0;
var cadillac = document.querySelector(".header");

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();
 
    if ( scrolled > 100 && scrolled > scrollPrev ) {
        cadillac.classList.add('bitch');
    } else {
        cadillac.classList.remove('bitch');
    }
    scrollPrev = scrolled;
});

function elemLink(el) {
    elem=document.querySelector(el); 
    $('html, body').animate({
        scrollTop: ($(elem).offset().top - 100)
    }, 100); 
}
