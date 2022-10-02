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
            className='w-12/12 h-80 mb-7 lg:w-4/12 lg:px-2'
        >
            {!videoLoaded &&
                <div className='flex justify-center h-80'>
                    <PulseLoader className={`self-center`} color='white' />
                </div>}
            <iframe
                loading='lazy'
                src={video}
                id={video}
                className={`rounded-lg w-full min-h-full`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </InView>
    )
}

export default SingleVideo