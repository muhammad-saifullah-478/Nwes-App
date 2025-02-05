import React, { useEffect, useState } from 'react'
import Card from './card'

function Newsapp() {
  const Api_key = "9dfc26b812694ba9b6343b7b5b35fefc"
  const [search, setSearch] = useState("pakistan")
  const [newsdata, setNewsdata] = useState(null)
  const getData = async () => {


    const responding = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_key}`);
    const jsonData = await responding.json();
    console.log(jsonData.articles)
    setNewsdata(jsonData.articles)
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)

  }
  const userInput = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <nav>
        <div>
          <h1>
            Trending News
          </h1>
        </div>
        <ul>
          <a>All News</a>
          <a>All Treanding</a>

        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput}></input>
          <button onClick={getData}>Search</button>

        </div>
      </nav>
      <p className='head'>Stay Update With Treanding</p>
      <div className='categoryBtn'>
        <button onClick={userInput} value="Politcal">Politcal </button>
        <button onClick={userInput} value="Entertanment">Entertanment</button>
        <button onClick={userInput} value="Technology">Technology</button>
        <button onClick={userInput} value="Health"> Health</button>
        <button onClick={userInput} value="Fetness">Fetness</button>
      </div>
      <div>
        {newsdata ? <Card data={newsdata}></Card> : null}
      </div>
    </>
  )
}

export default Newsapp