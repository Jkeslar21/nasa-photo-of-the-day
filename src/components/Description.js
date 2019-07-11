import React from 'react'

export default function Description(props) {
    return (
        <div>
            <p className={'description'}>{props.nasaData.explanation}</p>
        </div>
    )
}
