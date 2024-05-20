import React from 'react'

function NewscardRow(props) {
  return (
    <div>
      <article className='flex gap-3'>
            <img className='w-1/4' src={props.news.urlToImage} alt="" />
            <div>
              <h2 className='font-semibold text-xl my-2'>{props.news.title}</h2>
              <p>{props.news.description}</p>
            </div>
      </article>
    </div>
  )
}

export default NewscardRow

