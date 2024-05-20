import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Newscard from './components/Newscard'
import axios from 'axios'
import NewscardRow from './components/NewscardRow'



function App() {
  const [headLines , setHeadlines] = useState(null)
  useEffect(()=>{
    const API_KEY = import.meta.env.VITE_API_KEY
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
    .then((response)=>{
      setHeadlines(response.data.articles)
    })
    .catch((error)=> console.log(error))
  },[])

  return (
    <>
    {console.log(headLines)}
      <Header/>
      <main className='container mx-auto'>
        <section className='py-10'>
            <h2 className='p-3 font-semibold text-lg'>Happening Now</h2>
            {
              headLines?
              <div className='grid  gap-16 lg:grid-cols-2 lg:grid-rows-3'>
              <div className='lg:row-start-1 row-span-3'>
                <Newscard news = {headLines[0]} />
              </div>
              <div className='lg:row-start-1 row-span-1'>
                <NewscardRow news = {headLines[1]}/>
              </div>
              <div className='lg:row-start-2 row-span-1'>
                <NewscardRow news = {headLines[2]}/>
              </div>
              <div className='lg:row-start-3 row-span-1'>
                <NewscardRow news = {headLines[3]}/>
              </div>
            </div>: <span>loading....</span>
            } 

      </section>
      </main>
    </>
  )
}

export default App
