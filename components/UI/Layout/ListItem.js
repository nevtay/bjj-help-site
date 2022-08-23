import React from 'react'

const ListItem = (props) => {
    const item = props.item || ""
    return (
        <div className='text-white first-of-type:ml-0 last-of-type:mr-0 mr-3 mt-7 md-5 px-5 py-1 text-center border rounded-full'>
            <p>{item}</p>
        </div>
    )
}

export default ListItem