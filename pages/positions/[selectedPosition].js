import Images from '../../components/UI/Layout/Images';
import Videos from '../../components/UI/Layout/Videos';
import { useRouter } from "next/router"

import data from "../../utils/POSITIONS.json"
import Button from "../../components/UI/Button"

const SelectedPosition = () => {
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
        videos = <Videos selectedPositionDataVideoUrls={selectedPositionData.videosUrl} />

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