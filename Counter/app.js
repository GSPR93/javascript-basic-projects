let count=0;//initial count

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');//select all buttons using btn class

btns.forEach((item) => {
  item.addEventListener('click',function(e){
    const styles = e.currentTarget.classList;//using event object 'e' to get current target and class list
    if(styles.contains('decrease')){
      count--;
    }else if(styles.contains('increase')){
      count++;
    }else{
      count=0;
    }
    if(count>0){
      value.style.color = "green";
    }else if(count<0){
      value.style.color = "red";
    }else{
      value.style.color = "blue";
    }
    value.textContent = count;//setting counter to count
  });
});
