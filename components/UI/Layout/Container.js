import React from 'react'

const Container = (props) => {
    return (
        <div className='p-24 container'>{props.children}</div>
    )
}

export default Container