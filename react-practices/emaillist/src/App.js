import React from 'react'
import './assets/scss/App.scss'
import RegisterFom from './RegisterFom'
import Searchbar from './Searchbar'
import Emaillist from './Emaillist'
import data from './assets/json/data.json'

const App = () => {
  return (
    <div className={'App'}>
      <RegisterFom />
      <Searchbar />
      <Emaillist emails={data}/>
    </div>
  )
}
export default App