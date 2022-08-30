import Image from 'next/future/image'
import { useRouter } from "next/router"
import data from "../../utils/POSITIONS.json"
import BackButton from "../../components/UI/BackButton"

const SelectedPosition = () => {
    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""
    const selectedPositionData = selectedPosition && data.positions.find(pos => pos.name.toLowerCase() === selectedPosition.toLowerCase())
    let images

    const navigateToPositionsPage = () => router.push('/positions')

    if (!selectedPositionData) {
        return (
            <div>
                <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
                <BackButton onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-7" />
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-5/6'>{`No data found for "${selectedPosition}"`}</p>
            </div>
        )
    }

    if (selectedPositionData) {
        images = <span className="flex flex-col flex-wrap items-start items-center w-12/12 md:items-start lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-start">
            {selectedPositionData.imagesUrl && selectedPositionData.imagesUrl.map((img, idx) => {
                return (
                    <Image src={img} key={img}
                        alt={`${idx}`}
                        width={1000}
                        height={400}
                        className="rounded-lg object-fill mb-3 w-12/12 md:w-5/6 lg:w-5/12 lg:mt-0 lg:mr-3 last-of-type:lg:mr-0" />
                )
            })}
        </span>

        return (
            <div>
                <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
                <BackButton onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-7" />
                <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-yellow-300 mb-5'>{selectedPositionData.name}</h2>
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-5/6 '>{selectedPositionData.description}</p>
                {images}
            </div>
        )
    }
}

export default SelectedPosition