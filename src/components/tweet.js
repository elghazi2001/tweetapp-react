import React from 'react'
import {Content} from './Content.js'
import { User } from './user.js'


export const Tweet = ({pippo}) => {
    return (
        <div className='Tweet-card'>
          <div className='imgcountainer'>
          <img src={pippo.imageUrl}/>
          </div>
          <User pippo={pippo}/>
          <Content pippo={pippo}/>
        </div>
    )
}