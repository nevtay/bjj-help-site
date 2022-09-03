import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { InView } from 'react-intersection-observer';
import Images from '../../components/UI/Layout/Images';
import { useRouter } from "next/router"

import data from "../../utils/POSITIONS.json"
import Button from "../../components/UI/Button"

const SelectedPosition = () => {
    const [showSpinner, setShowSpinner] = useState(true)

    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""
    const selectedPositionData = selectedPosition && data.positions.find(pos => pos.name.toLowerCase() === selectedPosition.toLowerCase())
    let images
    let videos

    const navigateToPositionsPage = () => router.push('/positions')

    if (!selectedPositionData) {
        return (
            <div>
                <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
                <Button onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-7" />
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-5/6'>{`No data found for "${selectedPosition}"`}</p>
            </div>
        )
    }

    if (selectedPositionData) {
        images = <Images selectedPositionDataImageUrls={selectedPositionData.imagesUrl} />
        videos =
            <div className="min-h-screen">
                <h2 className='w-4/6 text-3xl md:text-3xl leading-normal text-yellow-300 mt-20 mb-3'>Videos</h2>
                {showSpinner && <div className="mt-20 text-center "><PulseLoader color="white" /></div>}
                <InView
                    as="span"
                    className="flex flex-col flex-wrap justify-evenly w-6/6 md:w-10/12"
                    onChange={(inView) => {
                        if (inView) {
                            setShowSpinner(false)
                        }
                    }}
                >
                    {selectedPositionData.videosUrl.map(video => {
                        return <iframe
                            key={video}
                            src={video}
                            id={video}
                            className="rounded-lg mb-10 h-72 md:h-96 w-12/12 mx-1.5 md:mx-0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={`A video about ${selectedPositionData.name}`}
                            loading="lazy"
                        >
                        </iframe>

                    })
                    }
                </InView>
            </div>

        return (
            <div>
                <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
                <Button onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-7" />
                <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-yellow-300 mb-5'>{selectedPositionData.name}</h2>
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-5/6'>{selectedPositionData.description}</p>
                {images}
                {videos}
            </div>
        )
    }
}

export default SelectedPosition