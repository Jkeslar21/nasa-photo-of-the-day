import React from 'react'
import ReactPlayer from 'react-player'

export default function Media(props) {
    return (
        <div>
            {props.nasaData.media_type === 'video' ? <ReactPlayer url={props.nasaData.url} /> : <img src={props.nasaData.hdurl} width={'480px'} /> }
        </div>
    )
}
