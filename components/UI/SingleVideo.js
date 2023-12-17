import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { InView } from 'react-intersection-observer';

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
            className='flex lg:w-5/12 mb-5 md:w-12/12 sm:w-12/12 lg:px-2 md:py-2 sm:py-2'
            style={{ height: "24rem" }}
        >
            {!videoLoaded &&
                <div className='flex justify-center h-80'>
                    <PulseLoader className={`self-center`} color='white' />
                </div>}
            <iframe
                loading='lazy'
                src={video}
                id={video}
                className={`rounded-lg h-full w-full`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </InView>
    )
}

export default SingleVideo