import React from 'react'
import {Content} from './Content.js'
import { User } from './user.js'
import{BiTrash} from 'react-icons/bi'

export const Tweet = ({pippo,handleDelete}) => {
    return (
        <div className='Tweet-card'>
          <div className='imgcountainer'>
          <img src={pippo.imageUrl}/>
          </div>
          <button onClick={handleDelete} className='cancella'> <BiTrash/></button>
          <User pippo={pippo}/>
          <Content pippo={pippo}/>
        </div>
    )
}