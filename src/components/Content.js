import React from 'react'
export const Content = ({pippo}) => {
    return(
        <div className='content'>
        <p className='msg'>
            {pippo.text}
        </p>
        <p className='date'>
           {pippo.tweetDate}
        </p>
    </div>
    )
}