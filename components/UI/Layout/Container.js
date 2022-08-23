import React from 'react'

const Container = (props) => {
    return (
        <div className='lg:p-24 md:mx-auto p-16'>{props.children}</div>
    )
}

export default Container