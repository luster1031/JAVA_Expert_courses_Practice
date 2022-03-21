import React , {useState} from 'react'
import './assets/scss/App.scss'
import RegisterFom from './RegisterFom'
import Searchbar from './Searchbar'
import Emaillist from './Emaillist'
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails]= useState(data);
  const [keyword, setKeyword] = useState('');

  const notifyKeywordChange = function(keyword) {
    setEmails(data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1));
  }
  return (
    <div className={'App'}>
      <RegisterFom />
      <Searchbar callback={notifyKeywordChange}/>
      <Emaillist emails={emails}/>
    </div>
  )
}
export default App