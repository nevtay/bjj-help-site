import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { InView, useInView } from 'react-intersection-observer';

const SingleVideo = (props) => {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const { video } = props
    return (
        <InView
            as="span"
            onChange={(inView) => {
                if (inView) {
                    setVideoLoaded(true)
                }
            }}
            rootMargin="0px"
            threshold="0.1"
            className='h-72 px-3 py-5 w-full m-auto md:w-11/12 md:h-80 lg:w-6/12 lg:min-h-full 2xl:min-h-full lg:mx-0'
        >
            {!videoLoaded &&
                <div className='flex justify-center h-80'>
                    <PulseLoader className={`self-center`} color='white' />
                </div>}
            <iframe
                loading='lazy'
                src={video}
                id={video}
                className={`rounded-lg w-full h-full`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </InView>
    )
}

export default SingleVideo