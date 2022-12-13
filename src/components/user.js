import React from 'react'
import {Avatar} from './avatar'

export const User = (props) => {
    return(
        <div className='User'>
            <Avatar user={props.user} />
        </div>
    )
}