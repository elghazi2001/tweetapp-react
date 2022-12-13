import React from 'react'

export const Avatar = ({pippo}) => {
    return(
        <div className='User'>
            <img src={pippo.user.avatarUrl}/>
        </div>
    )
}