var btn = document.getElementById('submit'),
    container = document.querySelector('.container');

// 할일(함수) : function(){ }
btn.addEventListener('click', function(){
    // click하면 실제로 할 일
    btn.style.color = 'red';
    console.log('버튼이 클릭되었습니다.');
}); 

container.addEventListener('mouseenter', function(){
    console.log('마우스가 들어왔어요');
});
container.addEventListener('mouseleave', function(){
    console.log('마우스가 나갔어요');
});

window.addEventListener('keydown', function(event){
    console.log(event.key);
    console.log(event.keyCode);
});