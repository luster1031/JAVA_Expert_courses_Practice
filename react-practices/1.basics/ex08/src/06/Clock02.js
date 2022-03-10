import React from 'react'

const Clock02=() =>{
  const date = new Date();
  const hour = date.getHours();
  const minit = date.getMinutes();
  const seconde = date.getSeconds();

  return (
    <div>
      {hour >= 12 ? "PM " : "AM "} 
      {('0' + (hour >12 ? hour -12 : hour)).slice(-2)} 
      {'  : '}
      {('0' + minit).slice(-2)} 
      {'  : '}
      {('0' + seconde).slice(-2)}
      </div>
  )
}

export default Clock02 