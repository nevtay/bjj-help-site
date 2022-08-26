import React from 'react'

const Container = (props) => {
    return (
        <div className='pt-16 px-10 md:px-16 lg:px-24 xl:px-36'>{props.children}</div>
    )
}

export default Container