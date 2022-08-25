import { useRouter } from "next/router"
import positions from "../../utils/POSITIONS.json"
import BackButton from "../../components/UI/BackButton"

const SelectedPosition = () => {
    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""
    const selectedPositionData = positions.data.find(pos => pos.name.toLowerCase() === selectedPosition.toLowerCase())

    if (selectedPositionData) {
        let images = <span className="mt-10 w-5/6 flex flex-row flex-wrap justify-start">
            {selectedPositionData.imagesUrl && selectedPositionData.imagesUrl.map(img => {
                return (
                    <img src={`${img}`} key={img} className="mr-3 mt-3 md:mt-0 last-child:mr-0 w-auto max-w-sm h-min-content" />
                )
            })}
        </span>

        const navigateToPositionsPage = () => router.push('/positions')
        return (
            <div>
                <h1 className='w-4/6 text-6xl leading-normal mb-1 text-yellow-500'>Positions</h1>
                <BackButton onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-5" />
                <h2 className='w-4/6 text-4xl leading-normal text-yellow-300 mb-5'>{selectedPositionData.name}</h2>
                <p className='w-5/6 md:w-4/6 text-small leading-normal text-yellow-300 mb-5'>{selectedPositionData.description}</p>
                {images}
            </div>
        )
    } else {
        return <p>SelectedPosition not found!</p>
    }
}

export default SelectedPosition