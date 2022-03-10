import React from 'react'

function Clock01() {
  const date = new Date();
  var first = 'AM';
  const hour = date.getHours().toString().padStart(2,'0');
    //  ('0' + data.getSeconds()).slice(-2);
  const minit = date.getMinutes().toString().padStart(2,'0');
  const seconde = date.getSeconds().toString().padStart(2,'0');

  if(hour >= 12){
      first = "PM";
  }
  return (
    <div>{first} {hour} : {minit} : {seconde}</div>
  )
}

export default Clock01  