import React from 'react'

const IconButton = ({img, name}) => {
    return (
        <article className="icon">
            <img src={img} alt="icon" name={name}></img>
            <h4 name={name}>{name}</h4>
        </article>
    );
}

export default IconButton