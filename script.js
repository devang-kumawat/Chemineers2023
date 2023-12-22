document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementsByClassName("navbar");
  const caraousel = document.querySelector(".carousell");
  var lastScrollTop = 0;
  navbar[0].classList.add("transparent");
  window.addEventListener("scroll", function () {
      var currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      if (window.scrollY < caraousel.offsetHeight || window.scrollY === 0) {
          navbar[0].classList.add("transparent");
          navbar[0].classList.remove("name");
      }
      else {
          navbar[0].classList.remove("transparent");
          navbar[0].classList.add("name");
          
      }


      if (currentScrollTop > lastScrollTop)
      {
          navbar[0].classList.add("changePosition");
          console.log("done");
      } 
      else if (currentScrollTop < lastScrollTop) 
      {
          navbar[0].classList.remove("changePosition");
      }


      lastScrollTop = currentScrollTop;
  });
})

