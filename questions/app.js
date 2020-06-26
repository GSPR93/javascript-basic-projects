//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
  const btn = item.querySelector('.question-btn');
  btn.addEventListener('click',function(){
    item.classList.toggle('show-text');
    //loop for removing the show-text class from other than clicked button
    questions.forEach((sameQsitem) => {
      if(item!==sameQsitem){
        sameQsitem.classList.remove('show-text');
      }
    });
  })
});


// traversing the dom
/*const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    let question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});*/
