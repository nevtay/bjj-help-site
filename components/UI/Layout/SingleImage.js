import { useState } from 'react'
import { PulseLoader } from 'react-spinners'

const SingleImage = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const { image } = props
    return (
        <>
            {!imageLoaded && <PulseLoader className={`m-auto justify-center items-center h-72 w-full lg:w-6/12 last-of-type:lg:mr-0`} color='white' />}
            <img
                src={image}
                alt={image.toString()}
                className={`${imageLoaded ? 'block' : 'hidden'} rounded-lg object-fit mb-6 px-1 w-full lg:w-6/12 last-of-type:lg:mr-0`}
                priority="true"
                onLoad={() => setImageLoaded(true)}
            />
        </>
    )
}

export default SingleImage