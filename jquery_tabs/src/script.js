/*
순수 자바스크립트(vanila script)를 이용하여
menu를 클릭하면 그에 맞는 내용이 보이도록(display block) script를 작성하시오.
페이지가 열리자마자는 menu1과 그에 맞는 내용이 나타나도록 작성하시오.
*/

/* 
tab-content 안의 div들 모두 안보이도록 한다.

링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTaget에 저장.
저장된 값에서 #을 삭제 
tabTarget = tab-1;

document.getElementById(tab-1).style.display = 'block';
*/

var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content > div');
console.log(tabContent);

for(var i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        e.preventDefault();
        var orgTarget = e.target.getAttribute('href');
        
        console.log(orgTarget);

        var tabTarget = orgTarget.replace('#', '');

        for(var j = 0 ; j < tabContent.length; j++){
            tabContent[j].style.display = 'none';
        }
        document.getElementById(tabTarget).style.display = 'block';
        
        for(var h = 0; h < targetLink.length; h++){
            targetLink[h].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}
    
document.getElementById('tabs-1').style.display = 'block';