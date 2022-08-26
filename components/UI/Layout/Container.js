import React from 'react'

const Container = (props) => {
    return (
        <div className='p-10 md:p-16 lg:p-24 '>{props.children}</div>
    )
}

export default Container