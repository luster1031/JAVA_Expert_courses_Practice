import React from 'react'

const Clock02=() =>{
  const date = new Date();
  const hour = date.getHours();
  const minit = date.getMinutes();
  const seconde = date.getSeconds();

  const html = 
    "<span>" + 
    (hour >= 12 ? "PM " : "AM " )+ 
    ('0' + (hour >12 ? hour -12 : hour)).slice(-2) + 
    " : " +
    ('0' + minit).slice(-2) + 
    " : " + 
    ('0' + seconde).slice(-2) +
    "</span>";

  
    return (
      /*
        component 01 : 컴포넌트 안이기 때문에 자바스크립트 구문이 가능하다.
      */

      <div
        /*
          component 02 : 여기서도 다중행 주석이 가능하다 : 비추
        */
        className="colok"
        title='시계'
      >
        {hour >= 12 ? "PM " : "AM "} 
        {('0' + (hour >12 ? hour -12 : hour)).slice(-2)} 
        {'  : '}
        {/*
            component 03 : 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다.
        */}
        {('0' + minit).slice(-2)} 
        {'  : '}
        {/*
            JSX는 HTML이 아니다. <!-- --> 주석은 사용할 수 없다.
        */}
        {('0' + seconde).slice(-2)}
        </div>
    )
}

export default Clock02 