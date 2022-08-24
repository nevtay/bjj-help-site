import { useRouter } from "next/router"
import BackButton from "../../components/UI/BackButton"

const SelectedPosition = () => {
    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""
    const navigateToPositionsPage = () => router.push('/positions')
    return (
        <div>
            <h1 className='w-4/6 text-6xl leading-normal mb-1 text-yellow-500'>Positions</h1>
            <h2 className='w-4/6 text-4xl leading-normal text-yellow-300 mb-5'>{selectedPosition}</h2>
            <BackButton onBack={navigateToPositionsPage} />
        </div>
    )
}

export default SelectedPosition