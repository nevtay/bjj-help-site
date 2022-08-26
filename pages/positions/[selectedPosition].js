import { useRouter } from "next/router"
import positions from "../../utils/POSITIONS.json"
import BackButton from "../../components/UI/BackButton"

const SelectedPosition = () => {
    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""
    const selectedPositionData = positions.data.find(pos => pos.name.toLowerCase() === selectedPosition.toLowerCase())

    if (selectedPositionData) {
        let images = <span className="flex flex-col flex-wrap items-center w-12/12 lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-center">
            {selectedPositionData.imagesUrl && selectedPositionData.imagesUrl.map(img => {
                return (
                    <img src={`${img}`} key={img} className="rounded-lg object-fill mb-3 w-10/12 md:w-8/12 lg:w-5/12 lg:mt-0 lg:mr-3 last-of-type:lg:mr-0" />
                )
            })}
        </span>

        const navigateToPositionsPage = () => router.push('/positions')
        return (
            <div>
                <h1 className='w-4/6 text-6xl leading-normal mb-1 text-yellow-500'>Positions</h1>
                <BackButton onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-5" />
                <h2 className='w-4/6 text-4xl leading-normal text-yellow-300 mb-5'>{selectedPositionData.name}</h2>
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-6/6 '>{selectedPositionData.description}</p>
                {images}
            </div>
        )
    } else {
        return <p>SelectedPosition not found!</p>
    }
}

export default SelectedPosition