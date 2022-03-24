import React , {useState, useEffect} from 'react'
import './assets/scss/App.scss'
import RegisterFom from './RegisterFom'
import Searchbar from './Searchbar'
import Emaillist from './Emaillist'
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails]= useState(data);
  const [keyword, setKeyword] = useState('');


  useEffect(async ()=>{
    const response = await fetch('/api',{
      method:'get',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:null
    });
    console.log(response);
    if(!response.ok){
      console.log("error", response.status, response.statusText);
      return;
    }

    const json = await response.json();
    if(json.result !== 'success'){
      console.log("error", json.message);
      return;
    }

    setEmails(json.data);
  },[]);

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