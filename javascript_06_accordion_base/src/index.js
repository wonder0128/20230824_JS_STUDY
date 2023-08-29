var btnCollapse = document.getElementById('btn-collapse'), // 아이디 btn-collapse
    heading = document.getElementsByClassName('panel-heading'), // 클래스명 panel-heading
    question = document.getElementsByClassName('panel-question'), // 클래스명 panel-question
    answer = document.getElementsByClassName('panel-body'); // 클래스명 panel-body

// 제목을 클릭하면 할 일
for(var i = 0; i < heading.length; i++){ // heading들 마다 할 일
    heading[i].addEventListener('click', function(e){
        for(var j = 0; j < question.length; j++){ // question 마다 할 일
            question[j].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activateBody();
        } 
    });
}
function activateBody(){
    // panel-body가 모두 보이지 않도록 answer가 안보이도록 -> display:none;
    for(var i = 0; i < answer.length; i++){
        answer[i].style.display = 'none';
    }

    // 클래스명 active panel-question 자식 중 panel-body가 나타나도록
    // .panel-question.active .panel-body -> css의 선택자
    var activePanel = document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display = 'block';
}
activateBody();

// collapse all 버튼을 클릭하면 모든 answer 안보이도록 한다.
btnCollapse.addEventListener('click', function(){
    for(var i = 0; i < answer.length; i++){
        answer[i].style.display = 'none';
    }
});