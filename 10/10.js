document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const divNum = document.querySelector('#divNum') ;
  const divplus = document.querySelector('.divplus') ;
  const divBonus = document.querySelector('#divBonus') ;
  const bt = document.querySelector('.sec > button') ;

  //요소 숨기기
  divNum.style.display = 'none';
  divplus.style.display = 'none';
  divBonus.style.display = 'none';

  //버튼 클릭
  bt.addEventListener('click', (e)=>{
    e.preventDefault();

    let arr = [] ;
    while( arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1 ; //1~45
      if ( !arr.includes(n) ) arr.push(n) ;
    }

    console.log(arr);


  });

});