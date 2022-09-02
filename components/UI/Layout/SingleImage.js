import { useState } from 'react'
import { PulseLoader } from 'react-spinners'

const SingleImage = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const { image } = props
    return (
        <>
            {!imageLoaded && <PulseLoader className={`m-auto justify-center items-center w-12/12 h-72 md:w-auto lg:w-6/12 last-of-type:lg:mr-0`} color='white' />}
            <img
                src={image}
                alt={image.toString()}
                className={`${imageLoaded ? 'block' : 'hidden'} rounded-lg object-fill mb-6 px-1 w-full md:w-auto lg:w-6/12 last-of-type:lg:mr-0`}
                priority={true}
                onLoad={() => setImageLoaded(true)}
            />
        </>
    )
}

export default SingleImage