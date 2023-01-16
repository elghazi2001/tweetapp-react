import React from 'react'

import {Tweet} from './tweet';

export const TweetList = ({list,handleDelete}) => {
    return(
        <div className='TweetList'>
            {
        list.map((post, index) => {
          return (
            <Tweet key={index} pippo={post} handleDelete={()=>handleDelete(index)}/>)
        })
      }
        </div>
    )
}