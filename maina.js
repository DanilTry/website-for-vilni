$(function() {
    $('.slider2').slick({
        dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: '150px',
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
        dots: true
      }
    },
    {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        }
      },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,


      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    })


    
})