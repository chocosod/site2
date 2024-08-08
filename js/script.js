var sgc1 = new ScrollGiveClass("header",{
    baseline:'100'
    //scroll막대가 100px내려오면 클래스 부여 
});

//Swiper플러그인 호출

const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    loop: false,
    wrapperClass:'slider',
    slideClass:'view',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },  
  });