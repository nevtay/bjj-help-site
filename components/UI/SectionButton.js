import React from 'react'

const SectionButton = (props) => {

    return (
        <button onClick={() => props.navigateTo()} type="button" className={`tracking-wide text-xl inline-flex items-center justify-center border-2 rounded-full px-5 py-3 font-bold w-auto ${props.className}`} aria-expanded="false">
            {props.pageName}
        </button>
    )
}

export default SectionButton