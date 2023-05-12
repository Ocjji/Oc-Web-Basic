var swiper1 = new Swiper(".mainVisual", {
    loop:true, 
    autoplay : {
        delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper2 = new Swiper(".brand-list", {   
    pagination: {
      el: ".swiper-pagination",
    },
  });