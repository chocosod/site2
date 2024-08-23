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

    autoplay: { //자동슬라이드
      delay: 5000, // 하나의 슬라이드가 보여주는 보여주는 시간
    },
    speed:'800',  // 슬라이드가 전환되는(움직이는)시간
    spaceBetween:'10',
    // If we need pagination
    pagination: {
      el: '.pager', // 버튼영역 대상
      bulletActiveClass: 'active', //활성화된 요소에 추가되는 클래스
      clickable: 'true', // 클릭시 슬라이드 이동

    },  

  });

  const swiper2 = new Swiper('#press .inner', {
    // Optional parameters
    loop: false,
    wrapperClass:'slider',
    slideClass:'item',
    slidesPerView: 5,
    spaceBetween: 30,
    pagination:{
      el:'.dot',
      bulletActiveClass:'active',
      clickable:true,
    },
    breakpoints:{
      //화면의 너비기 320이상 적용 옵션
      320:{slidesPerView:2,
          spaceBetween:20,
      }
      ,// 화면의 너비가 640이상 적용옵션
      640:{slidesPerView:3,
        spaceBetween:30,
      },
      //화면의 너비가 760이상 적용옵션
      768:{slidesPerView:4,
        spaceBetween:40,     
       },
      //화면의 너비가 1024이상 적용옵션
      1024:{slidesPerView:5,
        spaceBetween:30,
      },
    }
  });

//상품검색영역 스크립트 //  a태그에 있는 href=''  없애야함.
var eve = document.getElementById('eve');
var search = document.getElementById('search')
var close = document.getElementsByClassName('close_search')  // 클래스네임은 배열로 만들어짐.

// 돋보기 버튼 클릭시 
eve.addEventListener('click', function(e){
  e.preventDefault();  // 태그의 본래의 기능을 동작시키지 않음.
  search.classList.add('show');
  console.log('open');
});

// 닫기 버튼 클릭시
close[0].addEventListener('click', function(){  
  search.classList.remove('show');
  console.log('close');
});

//ESC키를 눌렀을때

window.addEventListener('keydown',function(e){
  var state = search.classList.contains('show');
  var esc = ('Escape' === e.key);
  if(state === esc){
    search.classList.remove('show');
    console.log('esc 입니다.');
  }

});

//전체 메뉴 클릭시(사라지고 나타나기 때문에 toggle로 줌.)
var open_menu = document.getElementsByClassName('open_menu')
var menu = document.getElementsByClassName('menu')

open_menu[0].addEventListener('click',function(e){
    e.preventDefault();
    menu[0].classList.toggle('active');
    this.classList.toggle('active');
   
});



