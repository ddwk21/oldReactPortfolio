import React from 'react';

    
const Project = (props) => {
    let image = props.image
    let text = props.text

    return(
        <div className='projectCard'>
            <img className='projectImage' src={image}></img>
            <div className='projectTxt'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Project;