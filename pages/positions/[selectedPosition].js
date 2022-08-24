import { useRouter } from "next/router"

const SelectedPosition = () => {
    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""

    return (
        <div>
            <h1 className='w-4/6 text-6xl leading-normal mb-1 text-yellow-500'>Positions</h1>
            <h2 className='w-4/6 text-4xl leading-normal text-yellow-300'>{selectedPosition}</h2>
        </div>
    )
}

export default SelectedPosition