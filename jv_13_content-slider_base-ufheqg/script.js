

// 변수 지정
var sliderWrapper = document.getElementsByClassName('container'), // 클래스명 container
    sliderContainer = document.getElementsByClassName('slider-container') ,// 클래스명 slider-container
    slides = document.getElementsByClassName('slide'), // 클래스명 slide
    slideCount = slides.length, // 슬라이드의 갯수
    currentIndex = 0, // 초기 index값
    topHeight = 0, // 초기 높이값
    navPrev = document.getElementById('prev'), // 아이디 prev
    navNext = document.getElementById('next'); // 아이디 next

    console.log(slideCount);

// 슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide(){
    for(var i = 0; i < slideCount; i++){
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight; // 각 li중 height가 가장 높은걸 기준
        }
    }
    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}
calculateTallestSlide();

console.log(topHeight);

// 슬라이드가 있으면 가로로 배열하기
for(var i = 0; i < slideCount; i++){
    slides[i].style.left = i*100 + '%';
}

// 슬라이드 이동 함수 
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;
    // updateNav();
}

// 버튼기능 업데이트 함수
function updateNav(){
    // 처음 일때
    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    } else {
        navPrev.classList.remove('disabled');
    }

    // 마지막 일 때
    if(currentIndex == slideCount - 1){
        navNext.classList.add('disabled');
    } else {
        navNext.classList.remove('disabled');
    }
}

// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', function(e){ 
    e.preventDefault(); // 기본 기능 막기
    // goToSlide(currentIndex - 1);
    if(currentIndex != 0){
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slideCount - 1);
    }
}); 

navNext.addEventListener('click', function(e){
    e.preventDefault(); // 기본 기능 막기
    // goToSlide(currentIndex + 1);
    if(currentIndex != slideCount -1){
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);
    }
});

// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);

