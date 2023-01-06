import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [클릭한제목, 클릭한제목변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 변경';
    newArray[1] = '연희동 맛집 추천'
    글제목변경(newArray);
  }

  return ( 
    <div className="App">
      <div className="black-nav">
         <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>

      <Coffee name = '커피' kk='헤헤'/>
      
      {
        글제목.map(function(글,i){
          return  ( 
            <div className="list">
              <h3 onClick={()=>{modal변경(!modal); 클릭한제목변경(i)}}> { 글 } <span onClick={ ()=>{ 따봉변경(따봉+1)} }></span>{따봉}</h3>
              <p>12월 17일 발행</p>
              <hr/>
            </div>
        ) 
        })
      }

      {
        modal === true
        ? <Modal 글제목={글제목} 클릭한제목={클릭한제목}></Modal> // 1.<자식컴포넌트 작명={state명}/>
        : null
      }
    </div>
  );
}

function Modal(props){
  return(
      <div className="modal">
      <h2>{ props.글제목[props.클릭한제목] // 2.자식컴포넌트에서 props 파라미터 추가 후에 사용
                }</h2> 
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
function Coffee(props) {
  return (
    <div>
      <h2>{props.name}는 맛있다!</h2>
      <h2>{props.kk}</h2>
      <button onClick={()=>
        console.log("클릭")
      }>클릭 </button>
      
    </div>
  );
}

export default App;