import React from 'react'

function Smallcard({image, location, distance}) {
    return (
        <div>
            <h1>Small Card</h1>
            {image}
            {location}
            {distance}
        </div>
    )
}

export default Smallcard
