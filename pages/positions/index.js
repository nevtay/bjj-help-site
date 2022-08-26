import { useRouter } from "next/router"
import BackButton from "../../components/UI/BackButton"
import List from "../../components/UI/Layout/List"

import data from "../../utils/POSITIONS.json"

const Positions = () => {
    const router = useRouter()
    const positions = data.data
    const navigateToHomePageHandler = () => router.push("/")
    return (
        <>
            <h1 className='w-4/6 text-6xl leading-normal mb-3 text-yellow-500'>Positions</h1>
            <BackButton hoverStyling="hover:bg-orange-400" onBack={navigateToHomePageHandler} />
            <List data={positions} dataType="positions" hoverStyling="hover:bg-orange-400" />
        </>
    )
}

export default Positions