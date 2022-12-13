import React from 'react'
import { User } from './user'







const Tweet = props => {
    return(
        <div className='Tweet' key={props.id}>
            <User/>

            <div className='Tweet-content'>
                <div className='Tweet-text'>{props.text}</div>
                <img
                className='Tweet-image'
                src={props.image.imageUrl}
                alt={props.image.description}
                />
                <div className='Formatted-date'>{formatdate(props.tweetDate)}</div>
            </div>
        </div>
    )
}