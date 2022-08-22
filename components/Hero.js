import React from 'react'

const Hero = () => {
    return (
        <>
            <h1 className='w-4/6 text-white text-6xl leading-normal mb-5'>A Brazilian Jiu-Jitsu Resource Page</h1>
            <span>
                <button type="button" className="rounded-m inline-flex items-center justify-center text-yellow-500 font-bold w-auto mr-7 hover:underline" aria-expanded="false">
                    Positions
                </button>
                <button type="button" className="rounded-md inline-flex items-center justify-center text-purple-500 font-bold w-auto hover:underline" aria-expanded="false">
                    Submissions
                </button>
            </span>
        </>
    )
}

export default Hero