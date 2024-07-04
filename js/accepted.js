let policy=document.querySelector('.policy');
let cookies=document.querySelector('.cookies');
let accept=document.querySelector('.accept');
function accepted(){
    accept.addEventListener('click',function(e){
        e.preventDefault();
       if(!policy.checked||!cookies.checked){
        alert('You must accept all conditions');
     }
     else{
        window.location.href = 'welcome.html';
     } 
    })
     
}
accepted();