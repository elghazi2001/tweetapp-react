import React from 'react'
import {Avatar} from './avatar'

export const User = ({pippo}) => {
    return(
        <div className='userarea'>
                <Avatar pippo={pippo} />
                <div className='name-user'>
                <h3> {pippo.user.name} </h3> 
                <h4 className='username'> {pippo.user.nickname}</h4>
                </div>
          </div>
          //   <Avatar user={props.user} />
        
    )
}