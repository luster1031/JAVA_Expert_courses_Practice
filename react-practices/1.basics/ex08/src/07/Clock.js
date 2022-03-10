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
    //  객체로 넣어 줘야한다.
    //  HTML 태그를 동적으로 생성하여 JSX element 의 특정 속성(dangerouslySetInnerHTML)
    //  으로 랜더링하는 작업은 금지하고 있지만,
    //  XSS(Cross-site Scripting) 보호 기능을 끄고 사용할 수 있다. 
    <div dangerouslySetInnerHTML={{ __html : html}}/>
    
  )
}

export default Clock02 