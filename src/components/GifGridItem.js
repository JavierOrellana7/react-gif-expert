import React from 'react'

export const GifGridItem = (props) => {

    console.log(props)

    return (
        <div className='card-group animate__animated animate__jackInTheBox'>

            <div className='card' style={{width: "18rem"}}>
            <img src={props.url} className="card-img-top" alt={props.title}/>
            <div className='card-body'>
                <p className="card-text">{props.title}</p>
            </div>
            </div>

        </div>
        
    )
}
