import React from 'react'

const Container = (props) => {
    return (
        <div className='pt-16 px-16 md:px-16 lg:px-30 xl:px-40'>{props.children}</div>
    )
}

export default Container