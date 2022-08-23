import React from 'react'

const ListItem = (props) => {
    const item = props.item || ""
    return (
        <div className='flex-initial text-white first-of-type:ml-0 mx-10 mt-8'>
            <p>{item}</p>
        </div>
    )
}

export default ListItem