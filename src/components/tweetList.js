import React from 'react'

import {getTweets} from '../api/tweetApi';
import {Tweet} from './tweet';

const list = getTweets();

export const TweetList = () => {
    return(
        <div className='TweetList'>
            {
        list.map((post, index) => {
          return (
            <Tweet key={index} pippo={post}/>)
        })
      }
        </div>
    )
}