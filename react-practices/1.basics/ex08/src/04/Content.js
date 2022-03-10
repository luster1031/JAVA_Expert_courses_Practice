import React from 'react'

//const f = function(){}
//const content = () => {
function content(){
  /*
  return (
    <p>Pure React(React API)로 컨포넌트 작성하기</p>
  );
  */

  return React.createElement('p', null, 'Pure React(React API)로 컨포넌트 작성하기');
}

export default content
