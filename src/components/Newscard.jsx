import React from 'react'

function Newscard(props) {
  console.log(props);
  return (
    <div>
      <article>
        <img src={props.news.urlToImage} alt="" />
        <h2 className='font-semibold text-xl my-2'>{props.news.title}</h2>
        <p>{props.news.description}</p>
      </article>
    </div>
  )
}

export default Newscard
