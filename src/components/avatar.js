import React from 'react'

export const Avatar = props => {
    return(
        <div className='User'>
            <img className='Avatar'
            src={props.user.avatarUrl}
            alt={props.user.name}
            />
            <div className='User-name'>{props.user.name}</div>
        </div>
    )
}