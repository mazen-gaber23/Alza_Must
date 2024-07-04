    let text1 = document.querySelectorAll('.card');
    let text2 = document.querySelectorAll('.card-title');
    let button= document.querySelector('.start');
    function game() {
  
    text1.forEach(function(card, index) {
        card.addEventListener('click', function() {
            text2[index].classList.add('d-block');
            text2[index].classList.remove('d-none');
        });
    });
}
function restart(){
    button.addEventListener('click',function(){
        text1.forEach(function(card, index) {
                text2[index].classList.remove('d-block');
                text2[index].classList.add('d-none');
        });
    })
}

game();
restart();
