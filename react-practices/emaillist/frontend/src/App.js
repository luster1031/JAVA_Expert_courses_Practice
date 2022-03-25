import React, { useState, useEffect } from 'react'
import './assets/scss/App.scss'
import RegisterFom from './RegisterFom'
import Searchbar from './Searchbar'
import Emaillist from './Emaillist'
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails] = useState([]);
  // const [keyword, setKeyword] = useState('');


  useEffect(async () => {
    try {
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });


      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      cosnoel.log(err);
    }
  }, []);

  const notifyKeywordChange = async function (keyword) {
    console.log("/api?kw=" + keyword);
    // setEmails(data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1));
    try {
      const response = await fetch(`/api?kw=${keyword}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });


      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      cosnoel.log(err);
    }
  }

  const notifyEmailAdd =function(email){
    console.log(email);
    console.log('post /api호출');
  }
  return (
    <div className={'App'}>
      <RegisterFom callback={notifyEmailAdd}/>
      <Searchbar callback={notifyKeywordChange} />
      <Emaillist emails={emails} />
    </div>
  )
}
export default App