//어제 날짜 구하기 함수
const getYesterday = () => {
  const yesterday = new Date() ;
  yesterday.setDate(yesterday.getDate() - 1) ;

  const year = yesterday.getFullYear() ;
  let month = yesterday.getMonth() + 1 ;
  let day = yesterday.getDate() ;

  //월 2자리
  month = month < 10 ? '0' + month : month ;
  day = day < 10 ? '0' + day : day ;

  //month = `0${month}`.slice(-2) ;
  // month = `${month}`.padStart(2,0) ;
  // console.log("month =", month)

  //yyyy-mm-dd
  return `${year}-${month}-${day}` ;
}

//DOM 생성후
document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const dt = document.querySelector('#dt') ;

  //어제 날짜 구하기
  let yesterday = getYesterday() ;
  console.log('yesterday :' , yesterday) ;

  //date 요소 최대값 결정
  dt.max = yesterday ;

});