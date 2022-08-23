import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    console.log("props", props)
    const items = props.data || []
    return (
        <div className='flex flex-wrap'>
            {items.map(item => {
                return <ListItem item={item} key={item} />
            })}
        </div>
    )
}

export default List