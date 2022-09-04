import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { InView } from 'react-intersection-observer';

const SingleVideo = (props) => {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const { video } = props
    return (
        <>
            <span
                className="flex flex-col flex-wrap justify-evenly w-6/6 md:w-10/12"
            >
                {!videoLoaded && <PulseLoader className={`m-auto justify-center items-center h-72 w-full lg:w-6/12 last-of-type:lg:mr-0`} color='white' />}
                <InView
                    as="span"
                    onChange={(inView) => {
                        if (inView) {
                            setVideoLoaded(true)
                        }
                    }}
                >
                </InView>
                <iframe
                    loading='lazy'
                    src={video}
                    id={video}
                    className={`rounded-lg mb-10 h-72 md:h-96 w-12/12 mx-1.5 md:mx-0`}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </span>
        </>
    )
}

export default SingleVideo