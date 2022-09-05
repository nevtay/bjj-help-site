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
            threshold="0"
            className='m-auto md:m-0'
        >
            {!videoLoaded &&
                <div className='flex justify-center h-80'>
                    <PulseLoader className={`self-center`} color='white' />
                </div>}
            <iframe
                loading='lazy'
                src={video}
                id={video}
                className={`rounded-lg w-full w-auto h-96`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </InView>
    )
}

export default SingleVideo