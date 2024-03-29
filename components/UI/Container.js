import React from 'react'

const Container = (props) => {
    return (
        <div className={`${props.classes} px-14 md:px-24 lg:px-30 xl:px-36`}>{props.children}</div>
    )
}

export default Container